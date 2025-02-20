import { createMachine, assing } from 'xstate';

const bookingMachine = createMachine({
    id: 'buy plane tickets',
    initial: 'initial',
    states: {
        initial: {
            on: {
                START: {
                    target: 'search',
                    actions: 'imprimirInicio',
                },
            }
        },
        search: {
            entry: 'imprimirEntrada',
            exit: 'imprimirSalida',
            on: {
                CONTINUE: 'passengers',
                CANCEL: 'initial',
            }
        },
        passengers: {
            on: {
                DONE: 'tickets',
                CANCEL: 'initial'
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
        imprimirInicio: () => console.log('Imprimir inicion'),
        imprimirEntrada: () => console.log('Imprimir entrada a search'),
        imprimirSalida: () => console.log('Imprimir salida del search'),
    }
}
)



export default bookingMachine;