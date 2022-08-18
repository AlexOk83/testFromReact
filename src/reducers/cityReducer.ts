interface ICity {
    id: string | number;
    name: string;
}

interface ICityState {
    items: ICity[];
    isFetching: boolean;
}

interface IAction {
    type: string;
    payload: unknown;
}

const defaultState: ICityState = {
    items: [
        {
            id: 1,
            name: 'Москва',
        },
        {
            id: 2,
            name: 'Санкт-петербург',
        },
        {
            id: 3,
            name: 'Томск',
        },
        {
            id: 4,
            name: 'Тольятти',
        },
        {
            id: 5,
            name: 'Саратов',
        },
        {
            id: 6,
            name: 'Ульяновск',
        },
        {
            id: 7,
            name: 'Ижевск',
        },
    ],
    isFetching: false,
}

export const ACTION_TYPES = {
    setCitites: 'SET_CITIES'
}

export default function cityReducer(state: ICityState = defaultState, action: IAction) {
    switch (action.type) {
        default:
            return state
    }
}

export const setCities = (cities: ICity[]): IAction => ({ type: ACTION_TYPES.setCitites, payload: cities })