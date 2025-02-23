import { assign, createMachine, fromPromise } from 'xstate';
import { fetchCountries } from '../Utils/api';

const fillCountries = {
    initial: 'loading',
    states: {
        loading: {
            invoke: {
                id: 'getCountries',
                src: fromPromise(() => fetchCountries()),
                onDone: {
                    target: 'success',
                    actions: assign({ countries: ({ event }) => event.output}),
                },
                onError: {
                    target: 'failure',
                    actions: assign({
                        error: 'Fallo el request',
                    })
                }
            }
        },
        success: {},
        failure: {
            on: {
                RETRY: { target: 'loading'},
            },
        },
    },
}

const bookingMachine = createMachine({
    id: 'buy plane tickets',
    initial: 'initial',
    context: {
        passengers: [],
        selectedCountry: '',
        countries: [],
        error: '',
    },
    states: {
        initial: {
            entry: 'resetContext',
            on: {
                START: {
                    target: 'search',
                },
            }
        },
        search: {
            on: {
                CONTINUE: {
                    target: 'passengers',
                    actions: assign({
                        selectedCountry: ({ context,event }) => 
                            event.selectedCountry,
                    })
                },
                CANCEL: 'initial',
            },
            ...fillCountries,
        },
        passengers: {
            on: {
                DONE: {
                    target:'tickets',
                    guard: 'moreThanOnePassenger'
                },
                CANCEL: 'initial',
                ADD: {
                    target: 'passengers',
                    actions: assign(({ context, event }) => {
                        const newPassenger = event.newPassenger;
                        const exists = context.passengers.some( p =>
                            p.toLowerCase() === newPassenger.toLowerCase()
                        );

                        if (context.passengers.length >= 5) {
                            return { ...context, error: 'Máximo 5 pasajeros permitidos.'}
                        }

                        if (exists) {
                            return {...context, error: 'Este pasajero ya fue agregado.'};
                        }
                        
                        return {
                            passengers: [...context.passengers, newPassenger],
                            error: ''
                        }
                        }
                    )
                }
            }
        },
        tickets: {
            // after: {
            //     5000: {
            //         target: 'initial'
            //     }
            // },
            on: {
                FINISH: 'initial',
            }
        },
    },
},
{
    actions: {
        resetContext: assign({
            passengers: () => [],
            selectedCountry: () => ''
        })
    },
    guards: {
        moreThanOnePassenger: ({ context }) => {
            return context.passengers.length > 0;
        }
    }
}
)

export default bookingMachine;