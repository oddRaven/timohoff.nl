export interface Item {
    cells: string[];
    class: string;
    subItems: Item[];
    isHidden: boolean;
}
