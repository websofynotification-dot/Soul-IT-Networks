export interface SearchState {
    title?: string;
    name?: string;
    "category"?: string;
    "year"?: string;
    question?: string;
    "page name"?: string;
}

export const searchKeys: (keyof SearchState)[] = ["name", "title", "category", "year", "question", "page name"];

export const updateStateField = <T, K extends keyof T>(
    setState: React.Dispatch<React.SetStateAction<T>>, key: K, value: T[K]) => {
    setState((prev) => ({
        ...prev,
        [key]: value,
    }));
};