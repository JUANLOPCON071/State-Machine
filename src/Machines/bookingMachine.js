import { assign, createMachine } from 'xstate';

const bookingMachine = createMachine({
    id: 'buy plane tickets',
    initial: 'initial',
    context: {
        passengers: [],
        selectedCountry: '',
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
                        selectedCountry: ({ event }) => 
                            event.selectedCountry,
                    })
                },
                CANCEL: 'initial',
            }
        },
        passengers: {
            on: {
                DONE: 'tickets',
                CANCEL: 'initial',
                ADD: {
                    target: 'passengers',
                    actions: assign(
                        ({ context, event }) => {
                            return {
                                passengers: [...context.passengers, event.newPassenger]
                            }
                        }
                    )
                }
            }
        },
        tickets: {
            on: {
                FINISH: 'initial',
                CANCEL: 'initial'
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
    }
}
)



export default bookingMachine;