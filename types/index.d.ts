export interface Link {
    id: number;
    route: string;
    label: string;
    icon?: any;
}

export interface TagProp {
    id: string;
    name: string;
    totalCount?: number;
    showCount?: boolean;
}