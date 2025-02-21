import { createMachine } from "xstate";

const fileMachine = createMachine({
    id: 'archivos',
    type: 'parallel',
    states: {
        upload: {
            initial: 'inicial',
            states: {
                inicial: {
                    on: {
                        INIT_UPLOAD: {target: 'cargando'}
                    }
                },
                cargando: {
                    on: {
                        UPLOAD_COMPLETE: { target: 'terminando'}
                    }
                },
                terminado: {}
            }
        },
        dowload: {
            initial: 'inicial',
            states: {
                inicial: {
                    on: {
                        INIT_DOWLOAD: { target: 'cargando' }
                    }
                },
                cargando: {
                    on: {
                        DOWLOAD_COMPLETE: { target: 'terminado'}
                    }
                },
                terminado: {}
            }
        }
    }
})

export default fileMachine;