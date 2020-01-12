import { SetStateAction, Dispatch } from 'react'

export interface ApiFactoryProps<T = any> {
    state: T
    setState: Dispatch<SetStateAction<T>>
}

export type ApiFactory<T = any> = (props: ApiFactoryProps<T>) => any