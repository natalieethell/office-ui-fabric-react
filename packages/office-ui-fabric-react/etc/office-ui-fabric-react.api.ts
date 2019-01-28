// @public (undocumented)
declare class ActionButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
declare class ActivityItem extends BaseComponent<IActivityItemProps, {}> {
    // (undocumented)
    constructor(props: IActivityItemProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class Autofill extends BaseComponent<IAutofillProps, IAutofillState> implements IAutofill {
    // (undocumented)
    constructor(props: IAutofillProps);
    // (undocumented)
    clear(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: IAutofillProps): void;
    // (undocumented)
    readonly cursorLocation: number | null;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        enableAutofillOnKeyPress: number[];
    };
    // (undocumented)
    focus(): void;
    // (undocumented)
    readonly inputElement: HTMLInputElement | null;
    // (undocumented)
    readonly isValueSelected: boolean;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    readonly selectionEnd: number | null;
    // (undocumented)
    readonly selectionStart: number | null;
    // (undocumented)
    readonly value: string;
    }

// @public @deprecated (undocumented)
declare class BaseAutoFill extends Autofill {
}

// @public (undocumented)
declare class BaseButton extends BaseComponent<IBaseButtonProps, IBaseButtonState> implements IButton {
    // (undocumented)
    constructor(props: IBaseButtonProps, rootClassName: string);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IBaseButtonProps, prevState: IBaseButtonState): void;
    // (undocumented)
    static defaultProps: Partial<IBaseButtonProps>;
    // (undocumented)
    dismissMenu(): void;
    // (undocumented)
    focus(): void;
    // (undocumented)
    openMenu(shouldFocusOnContainer?: boolean, shouldFocusOnMount?: boolean): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare class BaseExtendedPeoplePicker extends BaseExtendedPicker<IPersonaProps, IExtendedPeoplePickerProps> {
}

// @public (undocumented)
declare class BaseExtendedPicker<T, P extends IBaseExtendedPickerProps<T>> extends BaseComponent<P, IBaseExtendedPickerState<T>> implements IBaseExtendedPicker<T> {
    // (undocumented)
    constructor(basePickerProps: P);
    // (undocumented)
    protected canAddItems(): boolean;
    // (undocumented)
    clearInput(): void;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: P): void;
    // (undocumented)
    floatingPicker: React.RefObject<BaseFloatingPicker<T, IBaseFloatingPickerProps<T>>>;
    // (undocumented)
    protected floatingPickerProps: IBaseFloatingPickerProps<T>;
    // (undocumented)
    focus(): void;
    // (undocumented)
    readonly highlightedItems: T[];
    // (undocumented)
    protected input: React.RefObject<Autofill>;
    // (undocumented)
    readonly inputElement: HTMLInputElement | null;
    // (undocumented)
    readonly items: any;
    // (undocumented)
    protected onBackspace: (ev: React.KeyboardEvent<HTMLElement>) => void;
    // (undocumented)
    protected onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    // (undocumented)
    protected onInputChange: (value: string) => void;
    // (undocumented)
    protected onInputClick: (ev: React.MouseEvent<HTMLInputElement | Autofill>) => void;
    // (undocumented)
    protected onInputFocus: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    // (undocumented)
    protected onPaste: (ev: React.ClipboardEvent<HTMLInputElement | Autofill>) => void;
    // (undocumented)
    protected _onSelectedItemsChanged: () => void;
    // (undocumented)
    protected onSelectionChange: () => void;
    // (undocumented)
    protected _onSuggestionSelected: (item: T) => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    protected renderSelectedItemsList(): JSX.Element;
    // (undocumented)
    protected renderSuggestions(): JSX.Element;
    // (undocumented)
    protected root: React.RefObject<HTMLDivElement>;
    // (undocumented)
    selectedItemsList: React.RefObject<BaseSelectedItemsList<T, IBaseSelectedItemsListProps<T>>>;
    // (undocumented)
    protected selectedItemsListProps: IBaseSelectedItemsListProps<T>;
    // (undocumented)
    protected selection: Selection;
}

// @public (undocumented)
declare class BaseFloatingPeoplePicker extends BaseFloatingPicker<IPersonaProps, IPeopleFloatingPickerProps> {
}

// @public (undocumented)
declare class BaseFloatingPicker<T, P extends IBaseFloatingPickerProps<T>> extends BaseComponent<P, IBaseFloatingPickerState> implements IBaseFloatingPicker {
    // (undocumented)
    constructor(basePickerProps: P);
    // (undocumented)
    completeSuggestion: () => void;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: P): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    protected currentPromise: PromiseLike<any>;
    // (undocumented)
    readonly currentSelectedSuggestionIndex: number;
    // (undocumented)
    forceResolveSuggestion(): void;
    // (undocumented)
    hidePicker: () => void;
    // (undocumented)
    readonly inputText: string;
    // (undocumented)
    readonly isSuggestionsShown: boolean;
    // (undocumented)
    protected onChange(item: T): void;
    // (undocumented)
    protected onKeyDown: (ev: MouseEvent) => void;
    // (undocumented)
    onQueryStringChanged: (queryString: string) => void;
    // (undocumented)
    protected onSelectionChange(): void;
    // (undocumented)
    protected onSuggestionClick: (ev: React.MouseEvent<HTMLElement>, item: T, index: number) => void;
    // (undocumented)
    protected onSuggestionRemove: (ev: React.MouseEvent<HTMLElement>, item: T, index: number) => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    protected renderSuggestions(): JSX.Element | null;
    // (undocumented)
    protected root: React.RefObject<HTMLDivElement>;
    // (undocumented)
    protected selection: Selection;
    // (undocumented)
    showPicker: (updateValue?: boolean) => void;
    // (undocumented)
    readonly suggestions: any[];
    // (undocumented)
    protected suggestionsControl: SuggestionsControl<T>;
    // (undocumented)
    protected SuggestionsControlOfProperType: new (props: ISuggestionsControlProps<T>) => SuggestionsControl<T>;
    // (undocumented)
    protected suggestionStore: SuggestionsStore<T>;
    // (undocumented)
    updateSuggestions(suggestions: T[], forceUpdate?: boolean): void;
    // (undocumented)
    protected updateSuggestionsList(suggestions: T[] | PromiseLike<T[]>): void;
    // (undocumented)
    protected updateSuggestionWithZeroState(): void;
    // (undocumented)
    protected updateValue(updatedValue: string): void;
}

// @public (undocumented)
declare class BasePeoplePicker extends BasePicker<IPersonaProps, IPeoplePickerProps> {
}

// @public (undocumented)
declare class BasePeopleSelectedItemsList extends BaseSelectedItemsList<IExtendedPersonaProps, ISelectedPeopleProps> {
}

// @public (undocumented)
declare class BasePicker<T, P extends IBasePickerProps<T>> extends BaseComponent<P, IBasePickerState> implements IBasePicker<T> {
    // (undocumented)
    constructor(basePickerProps: P);
    // (undocumented)
    protected addItem: (item: T) => void;
    // (undocumented)
    protected addItemByIndex: (index: number) => void;
    // (undocumented)
    protected _ariaMap: IPickerAriaIds;
    // (undocumented)
    protected canAddItems(): boolean;
    // (undocumented)
    completeSuggestion(): void;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: P): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    componentWillUpdate(newProps: P, newState: IBasePickerState): void;
    // (undocumented)
    protected currentPromise: PromiseLike<any> | undefined;
    // (undocumented)
    dismissSuggestions: (ev?: any) => void;
    // (undocumented)
    focus(): void;
    // (undocumented)
    focusInput(): void;
    // (undocumented)
    protected focusZone: React.RefObject<IFocusZone>;
    // (undocumented)
    protected getActiveDescendant(): string | undefined;
    // (undocumented)
    protected getSuggestionsAlert(suggestionAlertClassName?: string): JSX.Element | undefined;
    // (undocumented)
    protected input: React.RefObject<IAutofill>;
    // (undocumented)
    protected _isFocusZoneInnerKeystroke: (ev: React.KeyboardEvent<HTMLElement>) => boolean;
    // (undocumented)
    readonly items: T[];
    // (undocumented)
    protected onBackspace(ev: React.KeyboardEvent<HTMLElement>): void;
    // (undocumented)
    protected onBlur: (ev: React.FocusEvent<HTMLElement | Autofill>) => void;
    // (undocumented)
    protected onChange(items?: T[]): void;
    // (undocumented)
    protected onEmptyInputFocus(): void;
    // (undocumented)
    protected onGetMoreResults: () => void;
    // (undocumented)
    protected onInputBlur: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    // (undocumented)
    protected onInputChange: (value: string) => void;
    // (undocumented)
    protected onInputFocus: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    // (undocumented)
    protected onItemChange: (changedItem: T, index: number) => void;
    // (undocumented)
    protected onKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    // (undocumented)
    protected onSelectionChange(): void;
    // (undocumented)
    protected onSuggestionClick: (ev: React.MouseEvent<HTMLElement>, item: any, index: number) => void;
    // (undocumented)
    protected onSuggestionRemove: (ev: React.MouseEvent<HTMLElement>, item: IPersonaProps, index: number) => void;
    // (undocumented)
    protected onSuggestionSelect(): void;
    // (undocumented)
    refocusSuggestions: (keyCode: number) => void;
    // (undocumented)
    protected removeItem: (item: IPickerItemProps<T>, focusNextItem?: boolean | undefined) => void;
    // (undocumented)
    protected removeItems: (itemsToRemove: any[]) => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    protected renderItems(): JSX.Element[];
    // (undocumented)
    protected renderSuggestions(): JSX.Element | null;
    // (undocumented)
    protected resetFocus(index?: number): void;
    // (undocumented)
    protected resolveNewValue(updatedValue: string, suggestions: T[]): void;
    // (undocumented)
    protected root: React.RefObject<HTMLDivElement>;
    // (undocumented)
    protected selection: Selection;
    // (undocumented)
    protected suggestionElement: React.RefObject<ISuggestions<T>>;
    // (undocumented)
    protected SuggestionOfProperType: new (props: ISuggestionsProps<T>) => Suggestions<T>;
    // (undocumented)
    protected suggestionStore: SuggestionsController<T>;
    // (undocumented)
    protected updateSuggestions(suggestions: any[]): void;
    // (undocumented)
    protected updateSuggestionsList(suggestions: T[] | PromiseLike<T[]>, updatedValue?: string): void;
    // (undocumented)
    protected updateValue(updatedValue: string): void;
}

// @public (undocumented)
declare class BasePickerListBelow<T, P extends IBasePickerProps<T>> extends BasePicker<T, P> {
    // (undocumented)
    protected onBackspace(ev: React.KeyboardEvent<HTMLElement>): void;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class BaseSelectedItemsList<T, P extends IBaseSelectedItemsListProps<T>> extends BaseComponent<P, IBaseSelectedItemsListState> implements IBaseSelectedItemsList<T> {
    // (undocumented)
    constructor(basePickerProps: P);
    // (undocumented)
    addItems: (items: T[]) => void;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: P): void;
    // (undocumented)
    componentWillUpdate(newProps: P, newState: IBaseSelectedItemsListState): void;
    // (undocumented)
    protected copyItems(items: T[]): void;
    // (undocumented)
    hasSelectedItems(): boolean;
    // (undocumented)
    highlightedItems(): T[];
    // (undocumented)
    readonly items: T[];
    // (undocumented)
    protected onChange(items?: T[]): void;
    // (undocumented)
    onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    // (undocumented)
    protected onItemChange: (changedItem: T, index: number) => void;
    // (undocumented)
    protected onSelectionChanged: () => void;
    // (undocumented)
    removeItem: (item: ISelectedItemProps<T>) => void;
    // (undocumented)
    removeItemAt: (index: number) => void;
    // (undocumented)
    removeItems: (itemsToRemove: any[]) => void;
    // (undocumented)
    removeSelectedItems(): void;
    // (undocumented)
    render(): any;
    // (undocumented)
    protected renderItems: () => JSX.Element[];
    // (undocumented)
    protected root: HTMLElement;
    // (undocumented)
    protected selection: Selection;
    // (undocumented)
    unselectAll(): void;
    updateItems(items: T[], focusIndex?: number): void;
}

// @public (undocumented)
declare enum BaseSlots {
    // (undocumented)
    backgroundColor = 1,
    // (undocumented)
    foregroundColor = 2,
    // (undocumented)
    primaryColor = 0,
}

// @public (undocumented)
declare const Breadcrumb: React.StatelessComponent<IBreadcrumbProps>;

// @public (undocumented)
declare class BreadcrumbBase extends BaseComponent<IBreadcrumbProps, any> {
    // (undocumented)
    constructor(props: IBreadcrumbProps);
    // (undocumented)
    componentWillReceiveProps(nextProps: IBreadcrumbProps): void;
    // (undocumented)
    static defaultProps: IBreadcrumbProps;
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare function buildColumns(items: any[], canResizeColumns?: boolean, onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => any, sortedColumnKey?: string, isSortedDescending?: boolean, groupedColumnKey?: string, isMultiline?: boolean): IColumn[];

// @public @deprecated
declare class Button extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    constructor(props: IButtonProps);
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
declare enum ButtonType {
    // (undocumented)
    command = 4,
    // (undocumented)
    compound = 3,
    // (undocumented)
    default = 6,
    // (undocumented)
    hero = 2,
    // (undocumented)
    icon = 5,
    // (undocumented)
    normal = 0,
    // (undocumented)
    primary = 1,
}

// @public (undocumented)
declare class Calendar extends BaseComponent<ICalendarProps, ICalendarState> implements ICalendar {
    // (undocumented)
    constructor(props: ICalendarProps);
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: ICalendarProps): void;
    // (undocumented)
    static defaultProps: ICalendarProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class Callout extends BaseComponent<ICalloutProps, ICalloutState> {
    // (undocumented)
    constructor(props: ICalloutProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare function canAnyMenuItemsCheck(items: IContextualMenuItem[]): boolean;

// @public (undocumented)
declare const Check: (props: ICheckProps) => JSX.Element;

// @public (undocumented)
declare class CheckBase extends BaseComponent<ICheckProps, {}> {
    // (undocumented)
    static defaultProps: ICheckProps;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    shouldComponentUpdate(newProps: ICheckProps): boolean;
}

// @public (undocumented)
declare const Checkbox: (props: ICheckboxProps) => JSX.Element;

// @public (undocumented)
declare class CheckboxBase extends BaseComponent<ICheckboxProps, ICheckboxState> implements ICheckbox {
    constructor(props: ICheckboxProps, context?: any);
    // (undocumented)
    readonly checked: boolean;
    // (undocumented)
    componentWillReceiveProps(newProps: ICheckboxProps): void;
    // (undocumented)
    static defaultProps: ICheckboxProps;
    // (undocumented)
    focus(): void;
    render(): JSX.Element;
}

// @public (undocumented)
declare enum CheckboxVisibility {
    always = 1,
    hidden = 2,
    onHover = 0,
}

// @public (undocumented)
declare const ChoiceGroup: (props: IChoiceGroupProps) => JSX.Element;

// @public (undocumented)
declare class ChoiceGroupBase extends BaseComponent<IChoiceGroupProps, IChoiceGroupState> implements IChoiceGroup {
    // (undocumented)
    constructor(props: IChoiceGroupProps);
    readonly checkedOption: IChoiceGroupOption | undefined;
    // (undocumented)
    componentWillReceiveProps(newProps: IChoiceGroupProps): void;
    // (undocumented)
    static defaultProps: IChoiceGroupProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const ChoiceGroupOption: (props: IChoiceGroupOptionProps) => JSX.Element;

// @public (undocumented)
declare const Coachmark: (props: ICoachmarkProps) => JSX.Element;

// @public (undocumented)
declare const COACHMARK_ATTRIBUTE_NAME = "data-coachmarkid";

// @public (undocumented)
declare class CoachmarkBase extends BaseComponent<ICoachmarkProps, ICoachmarkState> implements ICoachmark {
    // (undocumented)
    constructor(props: ICoachmarkProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: ICoachmarkProps, prevState: ICoachmarkState): void;
    // (undocumented)
    componentWillReceiveProps(newProps: ICoachmarkProps): void;
    // (undocumented)
    static defaultProps: Partial<ICoachmarkProps>;
    // (undocumented)
    dismiss: (ev?: Event | React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement> | undefined) => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    shouldComponentUpdate(newProps: ICoachmarkProps, newState: ICoachmarkState): boolean;
    }

// @public (undocumented)
declare enum CollapseAllVisibility {
    // (undocumented)
    hidden = 0,
    // (undocumented)
    visible = 1,
}

// @public (undocumented)
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;

// @public (undocumented)
declare class ColorPickerBase extends BaseComponent<IColorPickerProps, IColorPickerState> implements IColorPicker {
    // (undocumented)
    constructor(props: IColorPickerProps);
    // (undocumented)
    readonly color: IColor;
    // (undocumented)
    componentWillReceiveProps(newProps: IColorPickerProps): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        hexLabel: string;
        // (undocumented)
        redLabel: string;
        // (undocumented)
        greenLabel: string;
        // (undocumented)
        blueLabel: string;
        // (undocumented)
        alphaLabel: string;
    };
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare const ColorPickerGridCell: (props: IColorPickerGridCellProps) => JSX.Element;

// @public (undocumented)
declare class ColorPickerGridCellBase extends React.Component<IColorPickerGridCellProps, {}> {
    // (undocumented)
    static defaultProps: IColorPickerGridCellProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare enum ColumnActionsMode {
    clickable = 1,
    disabled = 0,
    hasDropdown = 2,
}

// @public
declare enum ColumnDragEndLocation {
    header = 2,
    outside = 0,
    surface = 1,
}

// @public (undocumented)
declare class ComboBox extends BaseComponent<IComboBoxProps, IComboBoxState> {
    // (undocumented)
    constructor(props: IComboBoxProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IComboBoxProps, prevState: IComboBoxState): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IComboBoxProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: IComboBoxProps;
    dismissMenu: () => void;
    // (undocumented)
    focus: (shouldOpenOnFocus?: boolean | undefined, useFocusAsync?: boolean | undefined) => void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare const CommandBar: (props: ICommandBarProps) => JSX.Element;

// @public (undocumented)
declare class CommandBarBase extends BaseComponent<ICommandBarProps, {}> implements ICommandBar {
    // (undocumented)
    static defaultProps: ICommandBarProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    remeasure(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare class CommandBarButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
declare const CommandButton: typeof ActionButton;

// @public (undocumented)
declare const CompactPeoplePicker: (props: IPeoplePickerProps) => JSX.Element;

// @public
declare class CompactPeoplePickerBase extends BasePeoplePicker {
    static defaultProps: {
        // (undocumented)
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        // (undocumented)
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps | undefined) => JSX.Element;
        // (undocumented)
        createGenericItem: typeof createGenericItem;
    };
}

// @public (undocumented)
declare class CompoundButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
declare enum ConstrainMode {
    horizontalConstrained = 1,
    unconstrained = 0,
}

// @public
declare const ContextualMenu: (props: IContextualMenuProps) => JSX.Element;

// @public (undocumented)
declare class ContextualMenuBase extends BaseComponent<IContextualMenuProps, IContextualMenuState> {
    // (undocumented)
    constructor(props: IContextualMenuProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    componentWillUpdate(newProps: IContextualMenuProps): void;
    // (undocumented)
    static defaultProps: IContextualMenuProps;
    // (undocumented)
    dismiss: (ev?: any, dismissAll?: boolean | undefined) => void;
    // (undocumented)
    render(): JSX.Element | null;
    }

// @public
declare const ContextualMenuItem: (props: IContextualMenuItemProps) => JSX.Element;

// @public (undocumented)
declare class ContextualMenuItemBase extends BaseComponent<IContextualMenuItemProps, {}> {
    // (undocumented)
    dismissMenu: (dismissAll?: boolean | undefined) => void;
    // (undocumented)
    dismissSubMenu: () => void;
    // (undocumented)
    openSubMenu: () => void;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum ContextualMenuItemType {
    // (undocumented)
    Divider = 1,
    // (undocumented)
    Header = 2,
    // (undocumented)
    Normal = 0,
    // (undocumented)
    Section = 3,
}

// @public (undocumented)
declare function createGenericItem(name: string, currentValidationState: ValidationState): IGenericItem & {
    // (undocumented)
    key: React.Key;
};

// @public (undocumented)
declare function createItem(name: string, isValid: boolean): ISuggestionModel<IPersonaProps>;

// @public (undocumented)
declare function cssColor(color: string): IRGB | undefined;

// @public
declare const DatePicker: (props: IDatePickerProps) => JSX.Element;

// @public (undocumented)
declare class DatePickerBase extends BaseComponent<IDatePickerProps, IDatePickerState> implements IDatePicker {
    // (undocumented)
    constructor(props: IDatePickerProps);
    // (undocumented)
    componentDidUpdate(prevProps: IDatePickerProps, prevState: IDatePickerState): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: IDatePickerProps): void;
    // (undocumented)
    static defaultProps: IDatePickerProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    reset(): void;
    }

// @public
declare enum DateRangeType {
    // (undocumented)
    Day = 0,
    // (undocumented)
    Month = 2,
    // (undocumented)
    Week = 1,
    // (undocumented)
    WorkWeek = 3,
}

// @public
declare enum DayOfWeek {
    // (undocumented)
    Friday = 5,
    // (undocumented)
    Monday = 1,
    // (undocumented)
    Saturday = 6,
    // (undocumented)
    Sunday = 0,
    // (undocumented)
    Thursday = 4,
    // (undocumented)
    Tuesday = 2,
    // (undocumented)
    Wednesday = 3,
}

// @public (undocumented)
declare const DEFAULT_MASK_CHAR = "_";

// @public (undocumented)
declare class DefaultButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
declare const DetailsList: (props: IDetailsListProps) => JSX.Element;

// @public (undocumented)
declare class DetailsListBase extends BaseComponent<IDetailsListProps, IDetailsListState> implements IDetailsList {
    // (undocumented)
    constructor(props: IDetailsListProps);
    // (undocumented)
    componentDidUpdate(prevProps: any, prevState: any): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IDetailsListProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    componentWillUpdate(): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        layoutMode: DetailsListLayoutMode;
        // (undocumented)
        selectionMode: SelectionMode;
        // (undocumented)
        constrainMode: ConstrainMode;
        // (undocumented)
        checkboxVisibility: CheckboxVisibility;
        // (undocumented)
        isHeaderVisible: boolean;
        // (undocumented)
        enableShimmer: boolean;
        // (undocumented)
        compact: boolean;
    };
    // (undocumented)
    focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    // (undocumented)
    forceUpdate(): void;
    // (undocumented)
    getStartItemIndexInView(): number;
    // (undocumented)
    protected _onRenderRow: (props: IDetailsRowProps, defaultRender?: any) => JSX.Element;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    }

// @public (undocumented)
declare enum DetailsListLayoutMode {
    fixedColumns = 0,
    justified = 1,
}

// @public (undocumented)
declare const DetailsRow: (props: IDetailsRowBaseProps) => JSX.Element;

// @public (undocumented)
declare class DetailsRowBase extends BaseComponent<IDetailsRowBaseProps, IDetailsRowState> {
    // (undocumented)
    constructor(props: IDetailsRowBaseProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(previousProps: IDetailsRowBaseProps): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IDetailsRowBaseProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    focus(forceIntoFirstElement?: boolean): boolean;
    measureCell(index: number, onMeasureDone: (width: number) => void): void;
    // (undocumented)
    protected _onRenderCheck(props: IDetailsRowCheckProps): JSX.Element;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    shouldComponentUpdate(nextProps: IDetailsRowBaseProps, nextState: IDetailsRowState): boolean;
    }

// @public (undocumented)
declare const DetailsRowCheck: (props: IDetailsRowCheckProps) => JSX.Element;

// @public (undocumented)
declare const Dialog: React.StatelessComponent<IDialogProps>;

// @public (undocumented)
declare class DialogBase extends BaseComponent<IDialogProps, {}> {
    // (undocumented)
    constructor(props: IDialogProps);
    // (undocumented)
    static defaultProps: IDialogProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const DialogContent: (props: IDialogContentProps) => JSX.Element;

// @public (undocumented)
declare class DialogContentBase extends BaseComponent<IDialogContentProps, {}> {
    // (undocumented)
    constructor(props: IDialogContentProps);
    // (undocumented)
    static defaultProps: IDialogContentProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const DialogFooter: (props: IDialogFooterProps) => JSX.Element;

// @public (undocumented)
declare class DialogFooterBase extends BaseComponent<IDialogFooterProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum DialogType {
    close = 2,
    largeHeader = 1,
    normal = 0,
}

// @public (undocumented)
declare const DirectionalHint: {
    // (undocumented)
    topLeftEdge: 0;
    // (undocumented)
    topCenter: 1;
    // (undocumented)
    topRightEdge: 2;
    // (undocumented)
    topAutoEdge: 3;
    // (undocumented)
    bottomLeftEdge: 4;
    // (undocumented)
    bottomCenter: 5;
    // (undocumented)
    bottomRightEdge: 6;
    // (undocumented)
    bottomAutoEdge: 7;
    // (undocumented)
    leftTopEdge: 8;
    // (undocumented)
    leftCenter: 9;
    // (undocumented)
    leftBottomEdge: 10;
    // (undocumented)
    rightTopEdge: 11;
    // (undocumented)
    rightCenter: 12;
    // (undocumented)
    rightBottomEdge: 13;
};

// @public (undocumented)
declare type DirectionalHint = typeof DirectionalHint[keyof typeof DirectionalHint];

// @public (undocumented)
declare const DocumentCard: (props: IDocumentCardProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardActions: (props: IDocumentCardActionsProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardActivity: (props: IDocumentCardActivityProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardDetails: (props: IDocumentCardDetailsProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardImage: (props: IDocumentCardImageProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardLocation: (props: IDocumentCardLocationProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardLogo: (props: IDocumentCardLogoProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardPreview: (props: IDocumentCardPreviewProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardStatus: (props: IDocumentCardStatusProps) => JSX.Element;

// @public (undocumented)
declare const DocumentCardTitle: (props: IDocumentCardTitleProps) => JSX.Element;

// @public (undocumented)
declare enum DocumentCardType {
    compact = 1,
    normal = 0,
}

// @public (undocumented)
declare const Dropdown: (props: IDropdownProps) => JSX.Element;

// @public (undocumented)
declare class DropdownBase extends BaseComponent<IDropdownInternalProps, IDropdownState> {
    // (undocumented)
    constructor(props: IDropdownProps);
    // (undocumented)
    componentDidUpdate(prevProps: IDropdownProps, prevState: IDropdownState): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IDropdownProps): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        options: any[];
    };
    // (undocumented)
    focus(shouldOpenOnFocus?: boolean): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    setSelectedIndex(event: React.FormEvent<HTMLDivElement>, index: number): void;
    }

// @public (undocumented)
declare enum ElementType {
    anchor = 1,
    button = 0,
}

// @public (undocumented)
declare const ExpandingCard: (props: IExpandingCardProps) => JSX.Element;

// @public (undocumented)
declare class ExpandingCardBase extends BaseComponent<IExpandingCardProps, IExpandingCardState> {
    // (undocumented)
    constructor(props: IExpandingCardProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        compactCardHeight: number;
        // (undocumented)
        expandedCardHeight: number;
        // (undocumented)
        directionalHintFixed: boolean;
    };
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum ExpandingCardMode {
    compact = 0,
    expanded = 1,
}

// @public (undocumented)
declare class ExtendedPeoplePicker extends BaseExtendedPeoplePicker {
}

// @public (undocumented)
declare class ExtendedSelectedItem extends BaseComponent<ISelectedPeopleItemProps, IPeoplePickerItemState> {
    // (undocumented)
    constructor(props: ISelectedPeopleItemProps);
    // (undocumented)
    protected persona: React.RefObject<HTMLDivElement>;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const Fabric: (props: IFabricProps) => JSX.Element;

// @public (undocumented)
declare class FabricBase extends BaseComponent<IFabricProps, {
    // (undocumented)
    isFocusVisible: boolean;
}> {
    // (undocumented)
    constructor(props: IFabricProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum FabricSlots {
    // (undocumented)
    black = 20,
    // (undocumented)
    neutralDark = 19,
    // (undocumented)
    neutralLight = 11,
    // (undocumented)
    neutralLighter = 10,
    // (undocumented)
    neutralLighterAlt = 9,
    // (undocumented)
    neutralPrimary = 18,
    // (undocumented)
    neutralPrimaryAlt = 17,
    // (undocumented)
    neutralQuaternary = 13,
    // (undocumented)
    neutralQuaternaryAlt = 12,
    // (undocumented)
    neutralSecondary = 16,
    // (undocumented)
    neutralTertiary = 15,
    // (undocumented)
    neutralTertiaryAlt = 14,
    // (undocumented)
    themeDark = 7,
    // (undocumented)
    themeDarkAlt = 6,
    // (undocumented)
    themeDarker = 8,
    // (undocumented)
    themeLight = 3,
    // (undocumented)
    themeLighter = 2,
    // (undocumented)
    themeLighterAlt = 1,
    // (undocumented)
    themePrimary = 0,
    // (undocumented)
    themeSecondary = 5,
    // (undocumented)
    themeTertiary = 4,
    // (undocumented)
    white = 21,
}

// @public
declare const Facepile: (props: IFacepileProps) => JSX.Element;

// @public
declare class FacepileBase extends BaseComponent<IFacepileProps, {}> {
    // (undocumented)
    constructor(props: IFacepileProps);
    // (undocumented)
    static defaultProps: IFacepileProps;
    // (undocumented)
    protected onRenderAriaDescription(): "" | JSX.Element | undefined;
    // (undocumented)
    render(): JSX.Element;
    }

// @public
declare enum FirstWeekOfYear {
    // (undocumented)
    FirstDay = 0,
    // (undocumented)
    FirstFourDayWeek = 2,
    // (undocumented)
    FirstFullWeek = 1,
}

// @public (undocumented)
declare class FloatingPeoplePicker extends BaseFloatingPeoplePicker {
    // (undocumented)
    static defaultProps: any;
}

// @public
declare const FocusTrapCallout: React.StatelessComponent<IFocusTrapCalloutProps>;

// @public (undocumented)
declare class FocusTrapZone extends BaseComponent<IFocusTrapZoneProps, {}> implements IFocusTrapZone {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IFocusTrapZoneProps): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: IFocusTrapZoneProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare class FocusZone extends BaseComponent<IFocusZoneProps, {}> implements IFocusZone {
    // (undocumented)
    constructor(props: IFocusZoneProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: IFocusZoneProps;
    focus(forceIntoFirstElement?: boolean): boolean;
    focusElement(element: HTMLElement): boolean;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum FocusZoneDirection {
    bidirectional = 2,
    horizontal = 1,
    vertical = 0,
}

// @public (undocumented)
declare const FocusZoneTabbableElements: {
    // (undocumented)
    none: 0;
    // (undocumented)
    all: 1;
    // (undocumented)
    inputOnly: 2;
};

// @public (undocumented)
declare type FocusZoneTabbableElements = typeof FocusZoneTabbableElements[keyof typeof FocusZoneTabbableElements];

// @public (undocumented)
declare function getBackgroundShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;

// @public (undocumented)
declare function getColorFromRGBA(rgba: {
    // (undocumented)
    r: number;
    // (undocumented)
    g: number;
    // (undocumented)
    b: number;
    // (undocumented)
    a: number;
}): IColor;

// @public (undocumented)
declare function getColorFromString(inputColor: string): IColor | undefined;

// @public (undocumented)
declare function getContrastRatio(color1: IColor, color2: IColor): number;

// @public (undocumented)
declare function getFullColorString(color: IColor): string;

// @public
declare const getMeasurementCache: () => {
    // (undocumented)
    getCachedMeasurement: (data: any) => number | undefined;
    // (undocumented)
    addMeasurementToCache: (data: any, measurement: number) => void;
};

// @public
declare const getNextResizeGroupStateProvider: (measurementCache?: {
    // (undocumented)
    getCachedMeasurement: (data: any) => number | undefined;
    // (undocumented)
    addMeasurementToCache: (data: any, measurement: number) => void;
}) => {
    // (undocumented)
    getNextState: (props: IResizeGroupProps, currentState: IResizeGroupState, getElementToMeasureWidth: () => number, newContainerWidth?: number | undefined) => IResizeGroupState | undefined;
    // (undocumented)
    shouldRenderDataForMeasurement: (dataToMeasure: any) => boolean;
    // (undocumented)
    getInitialResizeGroupState: (data: any) => IResizeGroupState;
};

// @public
declare function getShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;

// @public (undocumented)
declare function getSubmenuItems(item: IContextualMenuItem): IContextualMenuItem[] | undefined;

// @public (undocumented)
declare const Grid: (props: IGridProps) => JSX.Element;

// @public (undocumented)
declare class GridCell<T, P extends IGridCellProps<T>> extends React.Component<P, {}> {
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        disabled: boolean;
        // (undocumented)
        id: string;
    };
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const GroupedList: (props: IGroupedListProps) => JSX.Element;

// @public (undocumented)
declare class GroupedListBase extends BaseComponent<IGroupedListProps, IGroupedListState> implements IGroupedList {
    // (undocumented)
    constructor(props: IGroupedListProps);
    // (undocumented)
    componentWillReceiveProps(newProps: IGroupedListProps): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        selectionMode: SelectionMode;
        // (undocumented)
        isHeaderVisible: boolean;
        // (undocumented)
        groupProps: {};
        // (undocumented)
        compact: boolean;
    };
    // (undocumented)
    forceUpdate(): void;
    // (undocumented)
    getStartItemIndexInView(): number;
    // (undocumented)
    refs: {
        // (undocumented)
        [key: string]: React.ReactInstance;
    };
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    // (undocumented)
    toggleCollapseAll(allCollapsed: boolean): void;
    }

// @public (undocumented)
declare const groupOne: IExtendedPersonaProps[];

// @public (undocumented)
declare const groupTwo: IExtendedPersonaProps[];

// @public (undocumented)
declare const HoverCard: (props: IHoverCardProps) => JSX.Element;

// @public (undocumented)
declare class HoverCardBase extends BaseComponent<IHoverCardProps, IHoverCardState> {
    // (undocumented)
    constructor(props: IHoverCardProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IHoverCardProps, prevState: IHoverCardState): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        cardOpenDelay: number;
        // (undocumented)
        cardDismissDelay: number;
        // (undocumented)
        expandedCardOpenDelay: number;
        // (undocumented)
        instantOpenOnClick: boolean;
        // (undocumented)
        setInitialFocus: boolean;
        // (undocumented)
        openHotKey: number;
        // (undocumented)
        type: HoverCardType;
    };
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum HoverCardType {
    expanding = "ExpandingCard",
    plain = "PlainCard",
}

// @public (undocumented)
declare function hsl2hsv(h: number, s: number, l: number): IHSV;

// @public (undocumented)
declare function hsl2rgb(h: number, s: number, l: number): IRGB;

// @public (undocumented)
declare function hsv2hex(h: number, s: number, v: number): string;

// @public (undocumented)
declare function hsv2hsl(h: number, s: number, v: number): {
    // (undocumented)
    h: number;
    // (undocumented)
    s: number;
    // (undocumented)
    l: number;
};

// @public (undocumented)
declare function hsv2rgb(h: number, s: number, v: number): IRGB;

// @public (undocumented)
interface IActivityItemProps extends React.AllHTMLAttributes<HTMLElement> {
    activityDescription?: React.ReactNode[] | React.ReactNode;
    // @deprecated
    activityDescriptionText?: string;
    activityIcon?: React.ReactNode;
    activityPersonas?: Array<IPersonaSharedProps>;
    animateBeaconSignal?: boolean;
    beaconColorOne?: string;
    beaconColorTwo?: string;
    comments?: React.ReactNode[] | React.ReactNode;
    // @deprecated
    commentText?: string;
    componentRef?: IRefObject<{}>;
    isCompact?: boolean;
    onRenderActivityDescription?: IRenderFunction<IActivityItemProps>;
    onRenderComments?: IRenderFunction<IActivityItemProps>;
    onRenderIcon?: IRenderFunction<IActivityItemProps>;
    onRenderTimeStamp?: IRenderFunction<IActivityItemProps>;
    styles?: IActivityItemStyles;
    timeStamp?: string | React.ReactNode[] | React.ReactNode;
}

// @public (undocumented)
interface IActivityItemStyles {
    activityContent?: IStyle;
    activityPersona?: IStyle;
    activityText?: IStyle;
    activityTypeIcon?: IStyle;
    commentText?: IStyle;
    doublePersona?: IStyle;
    isCompactContent?: IStyle;
    isCompactIcon?: IStyle;
    isCompactPersona?: IStyle;
    isCompactPersonaContainer?: IStyle;
    isCompactRoot?: IStyle;
    isCompactTimeStamp?: IStyle;
    personaContainer?: IStyle;
    pulsingBeacon?: IStyle;
    root?: IStyle;
    timeStamp?: IStyle;
}

// @public (undocumented)
interface IAutofill {
    clear(): void;
    cursorLocation: number | null;
    focus(): void;
    inputElement: HTMLInputElement | null;
    isValueSelected: boolean;
    selectionEnd: number | null;
    selectionStart: number | null;
    value: string;
}

// @public (undocumented)
interface IAutofillProps extends React.InputHTMLAttributes<HTMLInputElement | Autofill> {
    componentRef?: IRefObject<IAutofill>;
    defaultVisibleValue?: string;
    enableAutofillOnKeyPress?: KeyCodes[];
    onInputChange?: (value: string) => string;
    onInputValueChange?: (newValue?: string) => void;
    preventValueSelection?: boolean;
    shouldSelectFullInputValueInComponentDidUpdate?: () => boolean;
    suggestedDisplayValue?: string;
    updateValueInWillReceiveProps?: () => string | null;
}

// @public (undocumented)
interface IAutofillState {
    // (undocumented)
    displayValue?: string;
}

// @public @deprecated
interface IBaseAutoFill extends IAutofill {
}

// @public @deprecated
interface IBaseAutoFillProps extends IAutofillProps {
}

// @public (undocumented)
interface IBaseButtonProps extends IButtonProps {
    // (undocumented)
    baseClassName?: string;
    // (undocumented)
    variantClassName?: string;
}

// @public (undocumented)
interface IBaseButtonState {
    // (undocumented)
    menuProps?: IContextualMenuProps | null;
}

// @public (undocumented)
interface IBaseExtendedPicker<T> {
    focus: () => void;
    forceResolve?: () => void;
    items: T[] | undefined;
}

// @public (undocumented)
interface IBaseExtendedPickerProps<T> {
    className?: string;
    componentRef?: IRefObject<IBaseExtendedPicker<T>>;
    currentRenderedQueryString?: string;
    defaultSelectedItems?: T[];
    disabled?: boolean;
    floatingPickerProps: IBaseFloatingPickerProps<T>;
    focusZoneProps?: IFocusZoneProps;
    headerComponent?: JSX.Element;
    inputProps?: IInputProps;
    itemLimit?: number;
    onBlur?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    onChange?: (items?: T[]) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    onItemAdded?: (addedItem: T) => void;
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T>;
    onItemsRemoved?: (removedItems: T[]) => void;
    onPaste?: (pastedText: string) => T[];
    onRenderFloatingPicker: (props: IBaseFloatingPickerProps<T>) => JSX.Element;
    onRenderSelectedItems: (props: IBaseSelectedItemsListProps<T>) => JSX.Element;
    selectedItems?: T[];
    selectedItemsListProps: IBaseSelectedItemsListProps<T>;
    suggestionItems?: T[];
}

// @public (undocumented)
interface IBaseExtendedPickerState<T> {
    // (undocumented)
    queryString: string | null;
    // (undocumented)
    selectedItems: T[] | null;
    // (undocumented)
    suggestionItems: T[] | null;
}

// @public (undocumented)
interface IBaseFloatingPicker {
    hidePicker: () => void;
    inputText: string;
    isSuggestionsShown: boolean;
    onQueryStringChanged: (input: string) => void;
    showPicker: (updateValue?: boolean) => void;
    suggestions: any[];
}

// @public (undocumented)
interface IBaseFloatingPickerProps<T> extends React.ClassAttributes<any> {
    calloutWidth?: number;
    className?: string;
    // (undocumented)
    componentRef?: IRefObject<IBaseFloatingPicker>;
    createGenericItem?: (input: string, isValid: boolean) => ISuggestionModel<T>;
    getTextFromItem?: (item: T, currentValue?: string) => string;
    inputElement?: HTMLInputElement | null;
    onChange?: (item: T) => void;
    onInputChanged?: (filter: string) => void;
    onRemoveSuggestion?: (item: IPersonaProps) => void;
    onRenderSuggestionsItem?: (props: T, itemProps: any) => JSX.Element;
    onResolveSuggestions: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]> | null;
    onSuggestionsHidden?: () => void;
    onSuggestionsShown?: () => void;
    onValidateInput?: (input: string) => boolean;
    onZeroQuerySuggestion?: (selectedItems?: T[]) => T[] | PromiseLike<T[]> | null;
    pickerSuggestionsProps?: IBaseFloatingPickerSuggestionProps;
    resolveDelay?: number;
    searchingText?: ((props: {
        // (undocumented)
        input: string;
    }) => string) | string;
    selectedItems?: T[];
    showForceResolve?: () => boolean;
    suggestionItems?: T[];
    suggestionsStore: SuggestionsStore<T>;
}

// @public (undocumented)
interface IBaseFloatingPickerState {
    // (undocumented)
    didBind: boolean;
    // (undocumented)
    queryString: string;
    // (undocumented)
    suggestionsVisible?: boolean;
}

// @public (undocumented)
interface IBaseFloatingPickerSuggestionProps {
    footerItemsProps?: ISuggestionsHeaderFooterProps[];
    headerItemsProps?: ISuggestionsHeaderFooterProps[];
    shouldSelectFirstItem?: () => boolean;
}

// @public
interface IBasePicker<T> {
    focus: () => void;
    focusInput: () => void;
    items: T[] | undefined;
}

// @public (undocumented)
interface IBasePickerProps<T> extends React.Props<any> {
    className?: string;
    componentRef?: IRefObject<IBasePicker<T>>;
    createGenericItem?: (input: string, ValidationState: ValidationState) => ISuggestionModel<T> | T;
    defaultSelectedItems?: T[];
    disabled?: boolean;
    enableSelectedSuggestionAlert?: boolean;
    getTextFromItem?: (item: T, currentValue?: string) => string;
    inputProps?: IInputProps;
    itemLimit?: number;
    onBlur?: React.FocusEventHandler<HTMLInputElement | BaseAutoFill>;
    onChange?: (items?: T[]) => void;
    onDismiss?: (ev?: any, selectedItem?: T) => void;
    onEmptyInputFocus?: (selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    onFocus?: React.FocusEventHandler<HTMLInputElement | BaseAutoFill>;
    onGetMoreResults?: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    onInputChange?: (input: string) => string;
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T> | null;
    onRemoveSuggestion?: (item: IPersonaProps) => void;
    onRenderItem?: (props: IPickerItemProps<T>) => JSX.Element;
    onRenderSuggestionsItem?: (props: T, itemProps: any) => JSX.Element;
    onResolveSuggestions: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    onValidateInput?: (input: string) => ValidationState;
    pickerCalloutProps?: ICalloutProps;
    pickerSuggestionsProps?: IBasePickerSuggestionsProps;
    removeButtonAriaLabel?: string;
    resolveDelay?: number;
    searchingText?: ((props: {
        // (undocumented)
        input: string;
    }) => string) | string;
    selectedItems?: T[];
    styles?: IStyleFunctionOrObject<IBasePickerStyleProps, IBasePickerStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IBasePickerState {
    // (undocumented)
    isFocused?: boolean;
    // (undocumented)
    isMostRecentlyUsedVisible?: boolean;
    // (undocumented)
    isResultsFooterVisible?: boolean;
    // (undocumented)
    isSearching?: boolean;
    // (undocumented)
    items?: any;
    // (undocumented)
    moreSuggestionsAvailable?: boolean;
    // (undocumented)
    selectedIndices?: number[];
    // (undocumented)
    suggestedDisplayValue?: string;
    // (undocumented)
    suggestionsLoading?: boolean;
    // (undocumented)
    suggestionsVisible?: boolean;
}

// @public
declare type IBasePickerStyleProps = Pick<IBasePickerProps<any>, 'theme' | 'className' | 'disabled'> & {
    isFocused?: boolean;
    inputClassName?: string;
};

// @public
interface IBasePickerStyles {
    input: IStyle;
    itemsWrapper: IStyle;
    root: IStyle;
    screenReaderText: IStyle;
    text: IStyle;
}

// @public (undocumented)
interface IBasePickerSuggestionsProps {
    className?: string;
    forceResolveText?: string;
    loadingText?: string;
    mostRecentlyUsedHeaderText?: string;
    noResultsFoundText?: string;
    onRenderNoResultFound?: IRenderFunction<void>;
    resultsFooter?: () => JSX.Element;
    resultsFooterFull?: () => JSX.Element;
    resultsMaximumNumber?: number;
    searchForMoreText?: string;
    searchingText?: string;
    showRemoveButtons?: boolean;
    suggestionsAvailableAlertText?: string;
    suggestionsClassName?: string;
    suggestionsContainerAriaLabel?: string;
    suggestionsHeaderText?: string;
    suggestionsItemClassName?: string;
}

// @public (undocumented)
interface IBaseSelectedItemsList<T> {
    // (undocumented)
    addItems: (items: T[]) => void;
    items: T[] | undefined;
}

// @public (undocumented)
interface IBaseSelectedItemsListProps<T> extends React.ClassAttributes<any> {
    canRemoveItem?: (item: T) => boolean;
    // (undocumented)
    componentRef?: IRefObject<IBaseSelectedItemsList<T>>;
    createGenericItem?: (input: string, ValidationState: ValidationState) => ISuggestionModel<T>;
    defaultSelectedItems?: T[];
    onChange?: (items?: T[]) => void;
    onCopyItems?: (items: T[]) => string;
    // @deprecated
    onItemDeleted?: (deletedItem: T) => void;
    onItemsDeleted?: (deletedItems: T[]) => void;
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T>;
    onRenderItem?: (props: ISelectedItemProps<T>) => JSX.Element;
    removeButtonAriaLabel?: string;
    selectedItems?: T[];
    selection?: Selection;
}

// @public (undocumented)
interface IBaseSelectedItemsListState {
    // (undocumented)
    items?: any;
}

// @public (undocumented)
interface IBreadcrumb {
    focus(): void;
}

// @public (undocumented)
interface IBreadCrumbData {
    // (undocumented)
    props: IBreadcrumbProps;
    // (undocumented)
    renderedItems: IBreadcrumbItem[];
    // (undocumented)
    renderedOverflowItems: IBreadcrumbItem[];
}

// @public (undocumented)
interface IBreadcrumbItem {
    href?: string;
    isCurrentItem?: boolean;
    key: string;
    onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem) => void;
    text: string;
}

// @public (undocumented)
interface IBreadcrumbProps extends React.ClassAttributes<BreadcrumbBase> {
    ariaLabel?: string;
    className?: string;
    componentRef?: IRefObject<IBreadcrumb>;
    dividerAs?: IComponentAs<IDividerAsProps>;
    items: IBreadcrumbItem[];
    maxDisplayedItems?: number;
    onReduceData?: (data: IBreadCrumbData) => IBreadCrumbData | undefined;
    onRenderItem?: IRenderFunction<IBreadcrumbItem>;
    overflowAriaLabel?: string;
    overflowIndex?: number;
    // (undocumented)
    styles?: IStyleFunctionOrObject<IBreadcrumbStyleProps, IBreadcrumbStyles>;
    // (undocumented)
    theme?: ITheme;
}

// @public (undocumented)
interface IBreadcrumbStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IBreadcrumbStyles {
    // (undocumented)
    chevron: IStyle;
    // (undocumented)
    item: IStyle;
    // (undocumented)
    itemLink: IStyle;
    // (undocumented)
    list: IStyle;
    // (undocumented)
    listItem: IStyle;
    // (undocumented)
    overflow: IStyle;
    // (undocumented)
    overflowButton: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IButton {
    dismissMenu: () => void;
    focus: () => void;
    openMenu: (shouldFocusOnContainer?: boolean, shouldFocusOnMount?: boolean) => void;
}

// @public (undocumented)
interface IButtonProps extends React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | BaseButton | Button> {
    allowDisabledFocus?: boolean;
    ariaDescription?: string;
    ariaHidden?: boolean;
    ariaLabel?: string;
    // @deprecated
    buttonType?: ButtonType;
    checked?: boolean;
    className?: string;
    componentRef?: IRefObject<IButton>;
    data?: any;
    // @deprecated
    description?: IStyle;
    disabled?: boolean;
    getClassNames?: (theme: ITheme, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined, allowDisabledFocus: boolean) => IButtonClassNames;
    getSplitButtonClassNames?: (disabled: boolean, expanded: boolean, checked: boolean, allowDisabledFocus: boolean) => ISplitButtonClassNames;
    href?: string;
    iconProps?: IIconProps;
    keytipProps?: IKeytipProps;
    menuAs?: IComponentAs<IContextualMenuProps>;
    menuIconProps?: IIconProps;
    menuProps?: IContextualMenuProps;
    menuTriggerKeyCode?: KeyCodes | null;
    onAfterMenuDismiss?: () => void;
    onMenuClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, button?: IButtonProps) => void;
    onRenderAriaDescription?: IRenderFunction<IButtonProps>;
    onRenderChildren?: IRenderFunction<IButtonProps>;
    onRenderDescription?: IRenderFunction<IButtonProps>;
    onRenderIcon?: IRenderFunction<IButtonProps>;
    // @deprecated
    onRenderMenu?: IRenderFunction<IContextualMenuProps>;
    onRenderMenuIcon?: IRenderFunction<IButtonProps>;
    onRenderText?: IRenderFunction<IButtonProps>;
    persistMenu?: boolean;
    primary?: boolean;
    primaryDisabled?: boolean;
    // @deprecated
    rootProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>;
    secondaryText?: string;
    split?: boolean;
    splitButtonAriaLabel?: string;
    styles?: IButtonStyles;
    text?: string;
    theme?: ITheme;
    toggle?: boolean;
    // @deprecated
    toggled?: boolean;
    uniqueId?: string | number;
}

// @public (undocumented)
interface IButtonStyles {
    description?: IStyle;
    descriptionChecked?: IStyle;
    descriptionDisabled?: IStyle;
    descriptionHovered?: IStyle;
    descriptionPressed?: IStyle;
    flexContainer?: IStyle;
    icon?: IStyle;
    iconChecked?: IStyle;
    iconDisabled?: IStyle;
    iconExpanded?: IStyle;
    iconExpandedHovered?: IStyle;
    iconHovered?: IStyle;
    iconPressed?: IStyle;
    label?: IStyle;
    labelChecked?: IStyle;
    labelDisabled?: IStyle;
    labelHovered?: IStyle;
    menuIcon?: IStyle;
    menuIconChecked?: IStyle;
    menuIconDisabled?: IStyle;
    menuIconExpanded?: IStyle;
    menuIconExpandedHovered?: IStyle;
    menuIconHovered?: IStyle;
    menuIconPressed?: IStyle;
    root?: IStyle;
    rootChecked?: IStyle;
    rootCheckedDisabled?: IStyle;
    rootCheckedHovered?: IStyle;
    rootCheckedPressed?: IStyle;
    rootDisabled?: IStyle;
    rootExpanded?: IStyle;
    rootExpandedHovered?: IStyle;
    rootFocused?: IStyle;
    rootHovered?: IStyle;
    rootPressed?: IStyle;
    screenReaderText?: IStyle;
    secondaryText?: IStyle;
    splitButtonContainer?: IStyle;
    splitButtonContainerChecked?: IStyle;
    splitButtonContainerCheckedHovered?: IStyle;
    splitButtonContainerDisabled?: IStyle;
    splitButtonContainerFocused?: IStyle;
    splitButtonContainerHovered?: IStyle;
    splitButtonDivider?: IStyle;
    splitButtonFlexContainer?: IStyle;
    splitButtonMenuButton?: IStyle;
    splitButtonMenuButtonChecked?: IStyle;
    splitButtonMenuButtonDisabled?: IStyle;
    splitButtonMenuButtonExpanded?: IStyle;
    splitButtonMenuIcon?: IStyle;
    splitButtonMenuIconDisabled?: IStyle;
    textContainer?: IStyle;
}

// @public
interface ICalendar {
    focus: () => void;
}

// @public
interface ICalendarFormatDateCallbacks {
    formatDay: (date: Date) => string;
    formatMonthDayYear: (date: Date, strings?: ICalendarStrings) => string;
    formatMonthYear: (date: Date, strings?: ICalendarStrings) => string;
    formatYear: (date: Date) => string;
}

// @public
interface ICalendarIconStrings {
    closeIcon?: string;
    leftNavigation?: string;
    rightNavigation?: string;
}

// @public
interface ICalendarProps extends IBaseProps<ICalendar>, React.HTMLAttributes<HTMLElement> {
    allFocusable?: boolean;
    autoNavigateOnSelection?: boolean;
    className?: string;
    componentRef?: IRefObject<ICalendar>;
    dateRangeType?: DateRangeType;
    dateTimeFormatter?: ICalendarFormatDateCallbacks;
    firstDayOfWeek?: DayOfWeek;
    firstWeekOfYear?: FirstWeekOfYear;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    isDayPickerVisible?: boolean;
    isMonthPickerVisible?: boolean;
    maxDate?: Date;
    minDate?: Date;
    navigationIcons?: ICalendarIconStrings;
    onDismiss?: () => void;
    onSelectDate?: (date: Date, selectedDateRangeArray?: Date[]) => void;
    restrictedDates?: Date[];
    selectDateOnClick?: boolean;
    // @deprecated
    shouldFocusOnMount?: boolean;
    showCloseButton?: boolean;
    showGoToToday?: boolean;
    showMonthPickerAsOverlay?: boolean;
    showSixWeeksByDefault?: boolean;
    showWeekNumbers?: boolean;
    strings: ICalendarStrings | null;
    today?: Date;
    value?: Date;
    workWeekDays?: DayOfWeek[];
    yearPickerHidden?: boolean;
}

// @public (undocumented)
interface ICalendarState {
    isDayPickerVisible?: boolean;
    isMonthPickerVisible?: boolean;
    navigatedDayDate?: Date;
    navigatedMonthDate?: Date;
    selectedDate?: Date;
}

// @public
interface ICalendarStrings {
    closeButtonAriaLabel?: string;
    days: string[];
    goToToday: string;
    months: string[];
    nextMonthAriaLabel?: string;
    nextYearAriaLabel?: string;
    prevMonthAriaLabel?: string;
    prevYearAriaLabel?: string;
    shortDays: string[];
    shortMonths: string[];
    weekNumberFormatString?: string;
}

// @public
interface ICallout {
}

// @public
interface ICalloutContentStyleProps {
    backgroundColor?: string;
    beakWidth?: number;
    calloutMaxWidth?: number;
    calloutWidth?: number;
    className?: string;
    overflowYHidden?: boolean;
    positions?: ICalloutPositionedInfo;
    theme: ITheme;
}

// @public
interface ICalloutContentStyles {
    beak: IStyle;
    beakCurtain: IStyle;
    calloutMain: IStyle;
    container: IStyle;
    root: IStyle;
}

// @public
interface ICalloutProps extends React.HTMLAttributes<HTMLDivElement> {
    alignTargetEdge?: boolean;
    ariaDescribedBy?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    backgroundColor?: string;
    beakWidth?: number;
    bounds?: IRectangle;
    calloutMaxHeight?: number;
    calloutMaxWidth?: number;
    calloutWidth?: number;
    className?: string;
    componentRef?: IRefObject<ICallout>;
    coverTarget?: boolean;
    directionalHint?: DirectionalHint;
    directionalHintFixed?: boolean;
    directionalHintForRTL?: DirectionalHint;
    doNotLayer?: boolean;
    finalHeight?: number;
    gapSpace?: number;
    hidden?: boolean;
    hideOverflow?: boolean;
    isBeakVisible?: boolean;
    layerProps?: ILayerProps;
    minPagePadding?: number;
    onDismiss?: (ev?: any) => void;
    onLayerMounted?: () => void;
    onPositioned?: (positions?: ICalloutPositionedInfo) => void;
    onScroll?: () => void;
    preventDismissOnLostFocus?: boolean;
    preventDismissOnResize?: boolean;
    preventDismissOnScroll?: boolean;
    role?: string;
    setInitialFocus?: boolean;
    style?: React.CSSProperties;
    styles?: IStyleFunctionOrObject<ICalloutContentStyleProps, ICalloutContentStyles>;
    target?: Element | string | MouseEvent | IPoint | null;
    theme?: ITheme;
}

// @public (undocumented)
interface ICellStyleProps {
    // (undocumented)
    cellExtraRightPadding: number;
    // (undocumented)
    cellLeftPadding: number;
    // (undocumented)
    cellRightPadding: number;
}

// @public
interface ICheckbox {
    checked: boolean;
    focus: () => void;
}

// @public
interface ICheckboxProps extends React.ButtonHTMLAttributes<HTMLElement | HTMLInputElement> {
    ariaDescribedBy?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaPositionInSet?: number;
    ariaSetSize?: number;
    boxSide?: 'start' | 'end';
    checked?: boolean;
    checkmarkIconProps?: IIconProps;
    className?: string;
    componentRef?: IRefObject<ICheckbox>;
    defaultChecked?: boolean;
    disabled?: boolean;
    inputProps?: React.ButtonHTMLAttributes<HTMLElement | HTMLButtonElement>;
    keytipProps?: IKeytipProps;
    label?: string;
    onChange?: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => void;
    onRenderLabel?: IRenderFunction<ICheckboxProps>;
    styles?: IStyleFunctionOrObject<ICheckboxStyleProps, ICheckboxStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ICheckboxState {
    isChecked?: boolean;
}

// @public (undocumented)
interface ICheckboxStyleProps {
    // (undocumented)
    checked?: boolean;
    // (undocumented)
    className?: string;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    isUsingCustomLabelRender: boolean;
    // (undocumented)
    reversed?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface ICheckboxStyles {
    checkbox?: IStyle;
    checkmark?: IStyle;
    input?: IStyle;
    label?: IStyle;
    root?: IStyle;
    text?: IStyle;
}

// @public (undocumented)
interface ICheckProps extends React.ClassAttributes<CheckBase> {
    alwaysShowCheck?: boolean;
    checked?: boolean;
    className?: string;
    componentRef?: IRefObject<ICheckProps>;
    styles?: IStyleFunctionOrObject<ICheckStyleProps, ICheckStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ICheckStyleProps {
    checkBoxHeight?: string;
    // (undocumented)
    checked?: boolean;
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface ICheckStyles {
    check: IStyle;
    checkHost: IStyle;
    circle: IStyle;
    root: IStyle;
}

// @public (undocumented)
interface IChoiceGroup {
    checkedOption: IChoiceGroupOption | undefined;
    focus: () => void;
}

// @public (undocumented)
interface IChoiceGroupOption extends React.HTMLAttributes<HTMLElement | HTMLInputElement> {
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    iconProps?: IIconProps;
    id?: string;
    imageAlt?: string;
    imageSize?: {
        // (undocumented)
        width: number;
        // (undocumented)
        height: number;
    };
    imageSrc?: string;
    key: string;
    labelId?: string;
    onRenderField?: IRenderFunction<IChoiceGroupOption>;
    onRenderLabel?: (option: IChoiceGroupOption) => JSX.Element;
    selectedImageSrc?: string;
    text: string;
}

// @public (undocumented)
interface IChoiceGroupOptionProps extends IChoiceGroupOption {
    componentRef?: IRefObject<IChoiceGroupOption>;
    focused?: boolean;
    name?: string;
    onBlur?: (ev: React.FocusEvent<HTMLElement>, props?: IChoiceGroupOption) => void;
    onChange?: OnChangeCallback;
    onFocus?: OnFocusCallback;
    required?: boolean;
    styles?: IStyleFunctionOrObject<IChoiceGroupOptionStyleProps, IChoiceGroupOptionStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IChoiceGroupOptionStyleProps {
    // (undocumented)
    checked?: boolean;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    focused?: boolean;
    // (undocumented)
    hasIcon?: boolean;
    // (undocumented)
    hasImage?: boolean;
    // (undocumented)
    imageIsLarge?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IChoiceGroupOptionStyles {
    // (undocumented)
    choiceFieldWrapper?: IStyle;
    // (undocumented)
    field?: IStyle;
    // (undocumented)
    iconWrapper?: IStyle;
    // (undocumented)
    imageWrapper?: IStyle;
    // (undocumented)
    innerField?: IStyle;
    // (undocumented)
    input?: IStyle;
    // (undocumented)
    labelWrapper?: IStyle;
    // (undocumented)
    root?: IStyle;
    // (undocumented)
    selectedImageWrapper?: IStyle;
}

// @public (undocumented)
interface IChoiceGroupProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement> {
    ariaLabelledBy?: string;
    componentRef?: IRefObject<IChoiceGroup>;
    defaultSelectedKey?: string | number;
    label?: string;
    onChange?: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => void;
    // @deprecated
    onChanged?: (option: IChoiceGroupOption, evt?: React.FormEvent<HTMLElement | HTMLInputElement>) => void;
    options?: IChoiceGroupOption[];
    selectedKey?: string | number;
    styles?: IStyleFunctionOrObject<IChoiceGroupStyleProps, IChoiceGroupStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IChoiceGroupState {
    // (undocumented)
    keyChecked: string | number;
    keyFocused?: string | number;
}

// @public (undocumented)
interface IChoiceGroupStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    optionsContainIconOrImage?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IChoiceGroupStyles {
    // (undocumented)
    applicationRole?: IStyle;
    // (undocumented)
    flexContainer?: IStyle;
    // (undocumented)
    label?: IStyle;
    // (undocumented)
    root?: IStyle;
}

// @public (undocumented)
interface ICircle extends IShimmerElement {
    height?: number;
}

// @public (undocumented)
interface ICoachmark {
    dismiss?: (ev?: any) => void;
}

// @public
interface ICoachmarkProps extends React.ClassAttributes<CoachmarkBase> {
    ariaAlertText?: string;
    ariaDescribedBy?: string;
    ariaDescribedByText?: string;
    ariaLabelledBy?: string;
    ariaLabelledByText?: string;
    beaconColorOne?: string;
    beaconColorTwo?: string;
    // @deprecated
    beakHeight?: number;
    // @deprecated
    beakWidth?: number;
    // @deprecated
    collapsed?: boolean;
    color?: string;
    componentRef?: IRefObject<ICoachmark>;
    delayBeforeCoachmarkAnimation?: number;
    delayBeforeMouseOpen?: number;
    // @deprecated
    height?: number;
    isCollapsed?: boolean;
    isPositionForced?: boolean;
    mouseProximityOffset?: number;
    onAnimationOpenEnd?: () => void;
    onAnimationOpenStart?: () => void;
    onDismiss?: (ev?: any) => void;
    onMouseMove?: (e: MouseEvent) => void;
    positioningContainerProps?: IPositioningContainerProps;
    preventDismissOnLostFocus?: boolean;
    preventFocusOnMount?: boolean;
    styles?: IStyleFunctionOrObject<ICoachmarkStyleProps, ICoachmarkStyles>;
    target: HTMLElement | string | null;
    // @deprecated
    teachingBubbleRef?: ITeachingBubble;
    // @deprecated
    width?: number;
}

// @public (undocumented)
interface ICoachmarkState {
    alertText?: string;
    beakBottom?: string;
    beakLeft?: string;
    beakRight?: string;
    beakTop?: string;
    entityInnerHostRect: IEntityRect;
    isBeaconAnimating: boolean;
    isCollapsed: boolean;
    isMeasured: boolean;
    isMeasuring: boolean;
    isMouseInProximity: boolean;
    targetAlignment?: RectangleEdge;
    targetPosition?: RectangleEdge;
    transformOrigin?: string;
}

// @public
interface ICoachmarkStyleProps {
    beaconColorOne?: string;
    beaconColorTwo?: string;
    // @deprecated
    collapsed?: boolean;
    color?: string;
    delayBeforeCoachmarkAnimation?: string;
    entityHostHeight?: string;
    entityHostWidth?: string;
    height?: string;
    isBeaconAnimating: boolean;
    isCollapsed: boolean;
    isMeasured: boolean;
    isMeasuring: boolean;
    transformOrigin?: string;
    width?: string;
}

// @public
interface ICoachmarkStyles {
    ariaContainer?: IStyle;
    childrenContainer: IStyle;
    collapsed?: IStyle;
    entityHost?: IStyle;
    entityInnerHost: IStyle;
    pulsingBeacon?: IStyle;
    root?: IStyle;
    rotateAnimationLayer?: IStyle;
    scaleAnimationLayer?: IStyle;
    translateAnimationContainer?: IStyle;
}

// @public @deprecated (undocumented)
declare type ICoachmarkTypes = ICoachmarkProps;

// @public (undocumented)
interface IColor extends IRGB, IHSV {
    // (undocumented)
    hex: string;
    // (undocumented)
    str: string;
}

// @public (undocumented)
interface IColorCellProps {
    color?: string;
    id: string;
    index?: number;
    label?: string;
}

// @public (undocumented)
interface IColorPicker {
    color: IColor;
}

// @public (undocumented)
interface IColorPickerGridCellProps {
    borderWidth?: number;
    circle?: boolean;
    color?: string;
    disabled?: boolean;
    height?: number;
    id: string;
    index?: number;
    item: IColorCellProps;
    label?: string;
    onClick?: (item: IColorCellProps) => void;
    onFocus?: (item: IColorCellProps) => void;
    onHover?: (item?: IColorCellProps) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    onMouseLeave?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseMove?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    onWheel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    selected: boolean;
    styles?: IStyleFunctionOrObject<IColorPickerGridCellStyleProps, IColorPickerGridCellStyles>;
    theme?: ITheme;
    width?: number;
}

// @public
interface IColorPickerGridCellStyleProps {
    borderWidth?: number;
    circle?: boolean;
    disabled?: boolean;
    height?: number;
    isWhite?: boolean;
    selected?: boolean;
    theme: ITheme;
    width?: number;
}

// @public
interface IColorPickerGridCellStyles {
    colorCell: IStyle;
    svg: IStyle;
}

// @public (undocumented)
interface IColorPickerProps extends IBaseProps<IColorPicker> {
    alphaLabel?: string;
    alphaSliderHidden?: boolean;
    blueLabel?: string;
    className?: string;
    color: string;
    componentRef?: IRefObject<IColorPicker>;
    greenLabel?: string;
    hexLabel?: string;
    onColorChanged?: (color: string, colorObject: IColor) => void;
    redLabel?: string;
    styles?: IStyleFunctionOrObject<IColorPickerStyleProps, IColorPickerStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IColorPickerState {
    // (undocumented)
    color: IColor;
}

// @public (undocumented)
interface IColorPickerStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IColorPickerStyles {
    input?: IStyle;
    panel?: IStyle;
    root?: IStyle;
    table?: IStyle;
    tableHeader?: IStyle;
    tableHexCell?: IStyle;
}

// @public (undocumented)
interface IColorRectangle {
}

// @public (undocumented)
interface IColorRectangleProps extends IBaseProps<IColorRectangle> {
    className?: string;
    color: IColor;
    componentRef?: IRefObject<IColorRectangle>;
    minSize?: number;
    onSVChanged?: (s: number, v: number) => void;
    styles?: IStyleFunctionOrObject<IColorRectangleStyleProps, IColorRectangleStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IColorRectangleStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IColorRectangleStyles {
    dark?: IStyle;
    light?: IStyle;
    root?: IStyle;
    thumb?: IStyle;
}

// @public (undocumented)
interface IColorSlider {
}

// @public (undocumented)
interface IColorSliderProps extends IBaseProps<IColorSlider> {
    className?: string;
    componentRef?: IRefObject<IColorSlider>;
    isAlpha?: boolean;
    maxValue?: number;
    minValue?: number;
    onChange?: (event: React.MouseEvent<HTMLElement>, newValue?: number) => void;
    // @deprecated
    onChanged?: (newValue: number) => void;
    overlayStyle?: any;
    styles?: IStyleFunctionOrObject<IColorSliderStyleProps, IColorSliderStyles>;
    theme?: ITheme;
    thumbColor?: string;
    value?: number;
}

// @public (undocumented)
interface IColorSliderStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IColorSliderStyles {
    root?: IStyle;
    sliderOverlay?: IStyle;
    sliderThumb?: IStyle;
}

// @public (undocumented)
interface IColumn {
    ariaLabel?: string;
    calculatedWidth?: number;
    className?: string;
    columnActionsMode?: ColumnActionsMode;
    currentWidth?: number;
    data?: any;
    fieldName?: string;
    filterAriaLabel?: string;
    groupAriaLabel?: string;
    headerClassName?: string;
    iconClassName?: string;
    iconName?: string;
    // @deprecated
    isCollapsable?: boolean;
    isCollapsible?: boolean;
    isFiltered?: boolean;
    isGrouped?: boolean;
    isIconOnly?: boolean;
    isMenuOpen?: boolean;
    isMultiline?: boolean;
    isPadded?: boolean;
    isResizable?: boolean;
    isRowHeader?: boolean;
    isSorted?: boolean;
    isSortedDescending?: boolean;
    key: string;
    maxWidth?: number;
    minWidth: number;
    name: string;
    onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => any;
    onColumnContextMenu?: (column?: IColumn, ev?: React.MouseEvent<HTMLElement>) => any;
    onColumnResize?: (width?: number) => void;
    onRender?: (item?: any, index?: number, column?: IColumn) => any;
    onRenderDivider?: IRenderFunction<IDetailsColumnProps>;
    sortAscendingAriaLabel?: string;
    sortDescendingAriaLabel?: string;
}

// @public (undocumented)
interface IColumnDragDropDetails {
    draggedIndex: number;
    targetIndex: number;
}

// @public (undocumented)
interface IColumnReorderOptions {
    frozenColumnCountFromEnd?: number;
    frozenColumnCountFromStart?: number;
    // @deprecated
    handleColumnReorder?: (draggedIndex: number, targetIndex: number) => void;
    onColumnDragStart?: (dragStarted: boolean) => void;
    onColumnDrop?: (dragDropDetails: IColumnDragDropDetails) => void;
    onDragEnd?: (columnDropLocationDetails: ColumnDragEndLocation) => void;
}

// @public (undocumented)
interface IComboBox {
    dismissMenu: () => void;
    focus(shouldOpenOnFocus?: boolean, useFocusAsync?: boolean): boolean;
}

// @public (undocumented)
interface IComboBoxOption extends ISelectableOption {
    styles?: Partial<IComboBoxOptionStyles>;
    useAriaLabelAsText?: boolean;
}

// @public (undocumented)
interface IComboBoxOptionStyles extends IButtonStyles {
    optionText: IStyle;
    optionTextWrapper: IStyle;
}

// @public (undocumented)
interface IComboBoxProps extends ISelectableDroppableTextProps<IComboBox> {
    allowFreeform?: boolean;
    autoComplete?: 'on' | 'off';
    buttonIconProps?: IIconProps;
    caretDownButtonStyles?: Partial<IButtonStyles>;
    comboBoxOptionStyles?: Partial<IComboBoxOptionStyles>;
    componentRef?: IRefObject<IComboBox>;
    dropdownMaxWidth?: number;
    dropdownWidth?: number;
    getClassNames?: (theme: ITheme, isOpen: boolean, disabled: boolean, required: boolean, focused: boolean, allowFreeForm: boolean, hasErrorMessage: boolean, className?: string) => IComboBoxClassNames;
    isButtonAriaHidden?: boolean;
    keytipProps?: IKeytipProps;
    multiSelect?: boolean;
    onChange?: (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string) => void;
    // @deprecated
    onChanged?: (option?: IComboBoxOption, index?: number, value?: string, submitPendingValueEvent?: any) => void;
    onItemClick?: (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number) => void;
    onMenuDismissed?: () => void;
    onMenuOpen?: () => void;
    onPendingValueChanged?: (option?: IComboBoxOption, index?: number, value?: string) => void;
    onRenderLowerContent?: IRenderFunction<IComboBoxProps>;
    onResolveOptions?: (options: IComboBoxOption[]) => IComboBoxOption[] | PromiseLike<IComboBoxOption[]>;
    onScrollToItem?: (itemIndex: number) => void;
    options: IComboBoxOption[];
    scrollSelectedToTop?: boolean;
    styles?: Partial<IComboBoxStyles>;
    text?: string;
    theme?: ITheme;
    useComboBoxAsMenuWidth?: boolean;
    // @deprecated
    value?: string;
}

// @public (undocumented)
interface IComboBoxState {
    currentOptions: IComboBoxOption[];
    currentPendingValue?: string;
    currentPendingValueValidIndex: number;
    currentPendingValueValidIndexOnHover: number;
    focused?: boolean;
    isOpen?: boolean;
    selectedIndices?: number[];
    suggestedDisplayValue?: string;
}

// @public (undocumented)
interface IComboBoxStyles {
    callout: IStyle;
    container: IStyle;
    divider: IStyle;
    errorMessage: IStyle;
    header: IStyle;
    input: IStyle;
    inputDisabled: IStyle;
    label: IStyle;
    labelDisabled: IStyle;
    optionsContainer: IStyle;
    optionsContainerWrapper: IStyle;
    root: IStyle;
    rootDisabled: IStyle;
    rootDisallowFreeForm: IStyle;
    rootError: IStyle;
    rootFocused: IStyle;
    rootHovered: IStyle;
    rootPressed: IStyle;
}

// @public (undocumented)
interface ICommandBar {
    focus(): void;
    remeasure(): void;
}

// @public (undocumented)
interface ICommandBarData {
    cacheKey: string;
    farItems: ICommandBarItemProps[] | undefined;
    minimumOverflowItems: number;
    overflowItems: ICommandBarItemProps[];
    primaryItems: ICommandBarItemProps[];
}

// @public (undocumented)
interface ICommandBarItemProps extends IContextualMenuItem {
    buttonStyles?: IButtonStyles;
    cacheKey?: string;
    commandBarButtonAs?: IComponentAs<ICommandBarItemProps>;
    iconOnly?: boolean;
    renderedInOverflow?: boolean;
    tooltipHostProps?: ITooltipHostProps;
}

// @public (undocumented)
interface ICommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
    ariaLabel?: string;
    buttonAs?: IComponentAs<IButtonProps>;
    className?: string;
    componentRef?: IRefObject<ICommandBar>;
    farItems?: ICommandBarItemProps[];
    items: ICommandBarItemProps[];
    onDataGrown?: (movedItem: ICommandBarItemProps) => void;
    onDataReduced?: (movedItem: ICommandBarItemProps) => void;
    onGrowData?: (data: ICommandBarData) => ICommandBarData;
    onReduceData?: (data: ICommandBarData) => ICommandBarData;
    overflowButtonAs?: IComponentAs<IButtonProps>;
    overflowButtonProps?: IButtonProps;
    overflowItems?: ICommandBarItemProps[];
    shiftOnReduce?: Boolean;
    styles?: IStyleFunctionOrObject<ICommandBarStyleProps, ICommandBarStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ICommandBarStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface ICommandBarStyles {
    // (undocumented)
    primarySet?: IStyle;
    // (undocumented)
    root?: IStyle;
    // (undocumented)
    secondarySet?: IStyle;
}

// @public
declare const Icon: (props: IIconProps) => JSX.Element;

// @public (undocumented)
declare class IconBase extends BaseComponent<IIconProps, IIconState> {
    // (undocumented)
    constructor(props: IIconProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class IconButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public (undocumented)
interface IContextualMenu {
}

// @public (undocumented)
interface IContextualMenuItem {
    [propertyName: string]: any;
    ariaLabel?: string;
    canCheck?: boolean;
    checked?: boolean;
    className?: string;
    componentRef?: IRefObject<IContextualMenuRenderItem>;
    customOnRenderListLength?: number;
    data?: any;
    disabled?: boolean;
    // @deprecated
    getItemClassNames?: (theme: ITheme, disabled: boolean, expanded: boolean, checked: boolean, isAnchorLink: boolean, knownIcon: boolean, itemClassName?: string, dividerClassName?: string, iconClassName?: string, subMenuClassName?: string, primaryDisabled?: boolean) => IMenuItemClassNames;
    getSplitButtonVerticalDividerClassNames?: (theme: ITheme) => IVerticalDividerClassNames;
    href?: string;
    iconProps?: IIconProps;
    // @deprecated
    inactive?: boolean;
    itemProps?: Partial<IContextualMenuItemProps>;
    // (undocumented)
    itemType?: ContextualMenuItemType;
    key: string;
    keytipProps?: IKeytipProps;
    // @deprecated
    name?: string;
    onClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) => boolean | void;
    onMouseDown?: (item: IContextualMenuItem, event: any) => void;
    onRender?: (item: any, dismissMenu: (ev?: any, dismissAll?: boolean) => void) => React.ReactNode;
    onRenderIcon?: IRenderFunction<IContextualMenuItemProps>;
    primaryDisabled?: boolean;
    rel?: string;
    role?: string;
    secondaryText?: string;
    sectionProps?: IContextualMenuSection;
    shortCut?: string;
    split?: boolean;
    // @deprecated
    style?: React.CSSProperties;
    submenuIconProps?: IIconProps;
    subMenuProps?: IContextualMenuProps;
    target?: string;
    text?: string;
    title?: string;
}

// @public (undocumented)
interface IContextualMenuItemProps extends React.HTMLAttributes<IContextualMenuItemProps> {
    className?: string;
    classNames: IMenuItemClassNames;
    componentRef?: IRefObject<IContextualMenuRenderItem>;
    dismissMenu?: (ev?: any, dismissAll?: boolean) => void;
    dismissSubMenu?: () => void;
    getSubmenuTarget?: () => HTMLElement | undefined;
    hasIcons: boolean | undefined;
    index: number;
    item: IContextualMenuItem;
    onCheckmarkClick?: ((item: IContextualMenuItem, ev: React.MouseEvent<HTMLElement>) => void);
    openSubMenu?: (item: any, target: HTMLElement) => void;
    styles?: IStyleFunctionOrObject<IContextualMenuItemStyleProps, IContextualMenuItemStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IContextualMenuItemStyleProps {
    checked: boolean;
    className?: string;
    disabled: boolean;
    dividerClassName?: string;
    expanded: boolean;
    iconClassName?: string;
    isAnchorLink: boolean;
    itemClassName?: string;
    knownIcon: boolean;
    primaryDisabled?: boolean;
    subMenuClassName?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IContextualMenuItemStyles extends IButtonStyles {
    anchorLink: IStyle;
    checkmarkIcon: IStyle;
    divider: IStyle;
    icon: IStyle;
    iconColor: IStyle;
    item: IStyle;
    label: IStyle;
    linkContent: IStyle;
    linkContentMenu: IStyle;
    root: IStyle;
    secondaryText: IStyle;
    splitContainer: IStyle;
    splitMenu: IStyle;
    splitPrimary: IStyle;
    subMenuIcon: IStyle;
}

// @public (undocumented)
interface IContextualMenuListProps {
    // (undocumented)
    hasCheckmarks: boolean;
    // (undocumented)
    hasIcons: boolean;
    // (undocumented)
    items: IContextualMenuItem[];
    // (undocumented)
    totalItemCount: number;
}

// @public
interface IContextualMenuProps extends IBaseProps<IContextualMenu>, IWithResponsiveModeState {
    alignTargetEdge?: boolean;
    ariaLabel?: string;
    beakWidth?: number;
    bounds?: IRectangle;
    calloutProps?: ICalloutProps;
    className?: string;
    componentRef?: IRefObject<IContextualMenu>;
    contextualMenuItemAs?: React.ComponentClass<IContextualMenuItemProps> | React.StatelessComponent<IContextualMenuItemProps>;
    coverTarget?: boolean;
    delayUpdateFocusOnHover?: boolean;
    directionalHint?: DirectionalHint;
    directionalHintFixed?: boolean;
    directionalHintForRTL?: DirectionalHint;
    doNotLayer?: boolean;
    focusZoneProps?: IFocusZoneProps;
    gapSpace?: number;
    // @deprecated
    getMenuClassNames?: (theme: ITheme, className?: string) => IContextualMenuClassNames;
    hidden?: boolean;
    id?: string;
    isBeakVisible?: boolean;
    isSubMenu?: boolean;
    items: IContextualMenuItem[];
    labelElementId?: string;
    onDismiss?: (ev?: any, dismissAll?: boolean) => void;
    onItemClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) => boolean | void;
    onMenuDismissed?: (contextualMenu?: IContextualMenuProps) => void;
    onMenuOpened?: (contextualMenu?: IContextualMenuProps) => void;
    onRenderMenuList?: IRenderFunction<IContextualMenuListProps>;
    onRenderSubMenu?: IRenderFunction<IContextualMenuProps>;
    shouldFocusOnContainer?: boolean;
    shouldFocusOnMount?: boolean;
    styles?: IStyleFunctionOrObject<IContextualMenuStyleProps, IContextualMenuStyles>;
    subMenuHoverDelay?: number;
    target?: Element | string | MouseEvent | IPoint | null;
    theme?: ITheme;
    title?: string;
    useTargetAsMinWidth?: boolean;
    useTargetWidth?: boolean;
}

// @public (undocumented)
interface IContextualMenuRenderItem {
    dismissMenu: (dismissAll?: boolean) => void;
    dismissSubMenu: () => void;
    openSubMenu: () => void;
}

// @public
interface IContextualMenuSection extends React.ClassAttributes<any> {
    bottomDivider?: boolean;
    items: IContextualMenuItem[];
    title?: string;
    topDivider?: boolean;
}

// @public (undocumented)
interface IContextualMenuState {
    // (undocumented)
    contextualMenuItems?: IContextualMenuItem[];
    // (undocumented)
    contextualMenuTarget?: Element;
    // (undocumented)
    dismissedMenuItemKey?: string;
    expandedByMouseClick?: boolean;
    // (undocumented)
    expandedMenuItemKey?: string;
    // (undocumented)
    positions?: any;
    // (undocumented)
    slideDirectionalClassName?: string;
    // (undocumented)
    submenuDirection?: DirectionalHint;
    // (undocumented)
    subMenuId?: string;
    // (undocumented)
    submenuTarget?: Element;
}

// @public (undocumented)
interface IContextualMenuStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IContextualMenuStyles {
    container: IStyle;
    header: IStyle;
    list: IStyle;
    root: IStyle;
    subComponentStyles: IContextualMenuSubComponentStyles;
    title: IStyle;
}

// @public (undocumented)
interface IContextualMenuSubComponentStyles {
    callout: IStyleFunctionOrObject<ICalloutContentStyleProps, any>;
    menuItem: IStyleFunctionOrObject<IContextualMenuItemStyleProps, any>;
}

// @public (undocumented)
declare enum IconType {
    // @deprecated
    Default = 100000,
    default = 0,
    // @deprecated
    Image = 100001,
    image = 1,
}

// @public (undocumented)
interface IDatePicker {
    focus(): void;
    reset(): void;
}

// @public (undocumented)
interface IDatePickerProps extends IBaseProps<IDatePicker>, React.HTMLAttributes<HTMLElement> {
    allFocusable?: boolean;
    allowTextInput?: boolean;
    ariaLabel?: string;
    borderless?: boolean;
    calendarAs?: IComponentAs<ICalendarProps>;
    calendarProps?: ICalendarProps;
    calloutProps?: ICalloutProps;
    className?: string;
    componentRef?: IRefObject<IDatePicker>;
    dateTimeFormatter?: ICalendarFormatDateCallbacks;
    disableAutoFocus?: boolean;
    disabled?: boolean;
    firstDayOfWeek?: DayOfWeek;
    firstWeekOfYear?: FirstWeekOfYear;
    formatDate?: (date?: Date) => string;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    initialPickerDate?: Date;
    isMonthPickerVisible?: boolean;
    isRequired?: boolean;
    label?: string;
    maxDate?: Date;
    minDate?: Date;
    onAfterMenuDismiss?: () => void;
    onSelectDate?: (date: Date | null | undefined) => void;
    parseDateFromString?: (dateStr: string) => Date | null;
    pickerAriaLabel?: string;
    placeholder?: string;
    showCloseButton?: boolean;
    showGoToToday?: boolean;
    showMonthPickerAsOverlay?: boolean;
    showWeekNumbers?: boolean;
    strings?: IDatePickerStrings;
    styles?: IStyleFunction<IDatePickerStyleProps, IDatePickerStyles>;
    tabIndex?: number;
    theme?: ITheme;
    today?: Date;
    underlined?: boolean;
    value?: Date;
}

// @public (undocumented)
interface IDatePickerState {
    // (undocumented)
    errorMessage?: string;
    // (undocumented)
    formattedDate?: string;
    // (undocumented)
    isDatePickerShown?: boolean;
    // (undocumented)
    selectedDate?: Date;
}

// @public (undocumented)
interface IDatePickerStrings {
    closeButtonAriaLabel?: string;
    days: string[];
    goToToday: string;
    invalidInputErrorMessage?: string;
    isOutOfBoundsErrorMessage?: string;
    isRequiredErrorMessage?: string;
    months: string[];
    nextMonthAriaLabel?: string;
    nextYearAriaLabel?: string;
    prevMonthAriaLabel?: string;
    prevYearAriaLabel?: string;
    shortDays: string[];
    shortMonths: string[];
}

// @public (undocumented)
interface IDatePickerStyleProps {
    className?: string;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    isDatePickerShown?: boolean;
    // (undocumented)
    label?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDatePickerStyles {
    // (undocumented)
    callout: IStyle;
    // (undocumented)
    icon: IStyle;
    root: IStyle;
    // (undocumented)
    textField: IStyle;
}

// @public (undocumented)
interface IDetailsFooterBaseProps extends IDetailsItemProps {
}

// @public (undocumented)
interface IDetailsFooterProps extends IDetailsFooterBaseProps {
    columns: IColumn[];
    selection: ISelection;
    selectionMode: SelectionMode;
}

// @public (undocumented)
interface IDetailsGroupDividerProps extends IGroupDividerProps, IDetailsItemProps {
}

// @public (undocumented)
interface IDetailsGroupRenderProps extends IGroupRenderProps {
    // (undocumented)
    onRenderFooter?: IRenderFunction<IDetailsGroupDividerProps>;
    // (undocumented)
    onRenderHeader?: IRenderFunction<IDetailsGroupDividerProps>;
}

// @public (undocumented)
interface IDetailsHeaderBaseProps extends React.ClassAttributes<DetailsHeaderBase>, IDetailsItemProps {
    ariaLabel?: string;
    ariaLabelForSelectAllCheckbox?: string;
    ariaLabelForSelectionColumn?: string;
    className?: string;
    collapseAllVisibility?: CollapseAllVisibility;
    columnReorderOptions?: IColumnReorderOptions;
    columnReorderProps?: IColumnReorderHeaderProps;
    componentRef?: IRefObject<IDetailsHeader_2>;
    isAllCollapsed?: boolean;
    layoutMode: DetailsListLayoutMode;
    minimumPixelsForDrag?: number;
    onColumnAutoResized?: (column: IColumn, columnIndex: number) => void;
    onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => void;
    onColumnContextMenu?: (column: IColumn, ev: React.MouseEvent<HTMLElement>) => void;
    onColumnIsSizingChanged?: (column: IColumn, isSizing: boolean) => void;
    onColumnResized?: (column: IColumn, newWidth: number, columnIndex: number) => void;
    onRenderColumnHeaderTooltip?: IRenderFunction<ITooltipHostProps>;
    onToggleCollapseAll?: (isAllCollapsed: boolean) => void;
    selectAllVisibility?: SelectAllVisibility;
    styles?: IStyleFunctionOrObject<IDetailsHeaderStyleProps, IDetailsHeaderStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDetailsHeaderProps extends IDetailsHeaderBaseProps {
    columns: IColumn[];
    selection: ISelection;
    selectionMode: SelectionMode;
}

// @public (undocumented)
interface IDetailsItemProps {
    cellStyleProps?: ICellStyleProps;
    checkboxVisibility?: CheckboxVisibility | undefined;
    columns?: IColumn[];
    groupNestingDepth?: number;
    indentWidth?: number | undefined;
    selection?: ISelection | undefined;
    selectionMode?: SelectionMode | undefined;
    viewport?: IViewport | undefined;
}

// @public (undocumented)
interface IDetailsList extends IList {
    focusIndex: (index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode) => void;
    forceUpdate: () => void;
    getStartItemIndexInView: () => number;
}

// @public (undocumented)
interface IDetailsListProps extends IBaseProps<IDetailsList>, IWithViewportProps {
    ariaLabel?: string;
    ariaLabelForGrid?: string;
    ariaLabelForListHeader?: string;
    ariaLabelForSelectAllCheckbox?: string;
    ariaLabelForSelectionColumn?: string;
    cellStyleProps?: ICellStyleProps;
    checkboxCellClassName?: string;
    checkboxVisibility?: CheckboxVisibility;
    checkButtonAriaLabel?: string;
    className?: string;
    columnReorderOptions?: IColumnReorderOptions;
    columns?: IColumn[];
    compact?: boolean;
    componentRef?: IRefObject<IDetailsList>;
    constrainMode?: ConstrainMode;
    disableSelectionZone?: boolean;
    dragDropEvents?: IDragDropEvents;
    enableShimmer?: boolean;
    enterModalSelectionOnTouch?: boolean;
    getGroupHeight?: (group: IGroup, groupIndex: number) => number;
    getKey?: (item: any, index?: number) => string;
    getRowAriaDescribedBy?: (item: any) => string;
    getRowAriaLabel?: (item: any) => string;
    groupProps?: IDetailsGroupRenderProps;
    groups?: IGroup[];
    indentWidth?: number;
    initialFocusedIndex?: number;
    isHeaderVisible?: boolean;
    items: any[];
    layoutMode?: DetailsListLayoutMode;
    listProps?: IListProps;
    minimumPixelsForDrag?: number;
    onActiveItemChanged?: (item?: any, index?: number, ev?: React.FocusEvent<HTMLElement>) => void;
    onColumnHeaderClick?: (ev?: React.MouseEvent<HTMLElement>, column?: IColumn) => void;
    onColumnHeaderContextMenu?: (column?: IColumn, ev?: React.MouseEvent<HTMLElement>) => void;
    onColumnResize?: (column?: IColumn, newWidth?: number, columnIndex?: number) => void;
    onDidUpdate?: (detailsList?: DetailsListBase) => any;
    onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean;
    onItemInvoked?: (item?: any, index?: number, ev?: Event) => void;
    onRenderDetailsFooter?: IRenderFunction<IDetailsFooterProps>;
    onRenderDetailsHeader?: IRenderFunction<IDetailsHeaderProps>;
    onRenderItemColumn?: (item?: any, index?: number, column?: IColumn) => any;
    onRenderMissingItem?: (index?: number, rowProps?: IDetailsRowProps) => React.ReactNode;
    onRenderRow?: IRenderFunction<IDetailsRowProps>;
    onRowDidMount?: (item?: any, index?: number) => void;
    onRowWillUnmount?: (item?: any, index?: number) => void;
    onShouldVirtualize?: (props: IListProps) => boolean;
    rowElementEventMap?: {
        // (undocumented)
        eventName: string;
        // (undocumented)
        callback: (context: IDragDropContext, event?: any) => void;
    }[];
    selection?: ISelection;
    selectionMode?: SelectionMode;
    selectionPreservedOnEmptyClick?: boolean;
    selectionZoneProps?: ISelectionZoneProps;
    setKey?: string;
    shouldApplyApplicationRole?: boolean;
    styles?: IStyleFunctionOrObject<IDetailsListStyleProps, IDetailsListStyles>;
    theme?: ITheme;
    usePageCache?: boolean;
    useReducedRowRenderer?: boolean;
    viewport?: IViewport;
}

// @public (undocumented)
interface IDetailsListState {
    // (undocumented)
    adjustedColumns: IColumn[];
    // (undocumented)
    focusedItemIndex: number;
    // (undocumented)
    isCollapsed?: boolean;
    // (undocumented)
    isDropping?: boolean;
    // (undocumented)
    isSizing?: boolean;
    // (undocumented)
    isSomeGroupExpanded?: boolean;
    // (undocumented)
    lastSelectionMode?: SelectionMode;
    // (undocumented)
    lastWidth?: number;
}

// @public (undocumented)
declare type IDetailsListStyleProps = Required<Pick<IDetailsListProps, 'theme'>> & Pick<IDetailsListProps, 'className'> & {
    isHorizontalConstrained?: boolean;
    compact?: boolean;
    isFixed?: boolean;
};

// @public (undocumented)
interface IDetailsListStyles {
    // (undocumented)
    contentWrapper: IStyle;
    // (undocumented)
    focusZone: IStyle;
    // (undocumented)
    headerWrapper: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDetailsRow {
}

// @public (undocumented)
interface IDetailsRowBaseProps extends IBaseProps<IDetailsRow>, IDetailsItemProps {
    checkboxCellClassName?: string;
    checkButtonAriaLabel?: string;
    className?: string;
    collapseAllVisibility?: CollapseAllVisibility;
    compact?: boolean;
    componentRef?: IRefObject<IDetailsRow>;
    dragDropEvents?: IDragDropEvents;
    dragDropHelper?: IDragDropHelper;
    eventsToRegister?: {
        // (undocumented)
        eventName: string;
        // (undocumented)
        callback: (item?: any, index?: number, event?: any) => void;
    }[];
    getRowAriaDescribedBy?: (item: any) => string;
    getRowAriaLabel?: (item: any) => string;
    item: any;
    itemIndex: number;
    onDidMount?: (row?: DetailsRowBase) => void;
    onRenderCheck?: (props: IDetailsRowCheckProps) => JSX.Element;
    onRenderItemColumn?: (item?: any, index?: number, column?: IColumn) => any;
    onWillUnmount?: (row?: DetailsRowBase) => void;
    rowFieldsAs?: React.StatelessComponent<IDetailsRowFieldsProps> | React.ComponentClass<IDetailsRowFieldsProps>;
    shimmer?: boolean;
    styles?: IStyleFunctionOrObject<IDetailsRowStyleProps, IDetailsRowStyles>;
    theme?: ITheme;
    useReducedRowRenderer?: boolean;
}

// @public (undocumented)
interface IDetailsRowCheckProps extends React.HTMLAttributes<HTMLElement> {
    anySelected?: boolean;
    canSelect: boolean;
    checkClassName?: string;
    className?: string;
    compact?: boolean;
    isHeader?: boolean;
    // @deprecated
    isSelected?: boolean;
    isVisible?: boolean;
    selected?: boolean;
    styles?: IStyleFunctionOrObject<IDetailsRowCheckStyleProps, IDetailsRowCheckStyles>;
    theme?: ITheme;
}

// @public (undocumented)
declare type IDetailsRowCheckStyleProps = Required<Pick<IDetailsRowCheckProps, 'theme'>> & Pick<IDetailsRowCheckProps, 'compact' | 'isHeader' | 'selected' | 'anySelected' | 'canSelect' | 'className'> & {
    isVisible?: boolean;
};

// @public (undocumented)
interface IDetailsRowCheckStyles {
    // (undocumented)
    check: IStyle;
    // (undocumented)
    isDisabled: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDetailsRowProps extends IDetailsRowBaseProps {
    columns: IColumn[];
    selection: ISelection;
    selectionMode: SelectionMode;
}

// @public (undocumented)
interface IDetailsRowSelectionState {
    // (undocumented)
    isSelected: boolean;
    // (undocumented)
    isSelectionModal: boolean;
}

// @public (undocumented)
interface IDetailsRowState {
    // (undocumented)
    columnMeasureInfo?: {
        // (undocumented)
        index: number;
        // (undocumented)
        column: IColumn;
        // (undocumented)
        onMeasureDone: (measuredWidth: number) => void;
    };
    // (undocumented)
    groupNestingDepth?: number;
    // (undocumented)
    isDropping?: boolean;
    // (undocumented)
    selectionState?: IDetailsRowSelectionState;
}

// @public (undocumented)
declare type IDetailsRowStyleProps = Required<Pick<IDetailsRowProps, 'theme'>> & {
    isSelected?: boolean;
    anySelected?: boolean;
    canSelect?: boolean;
    droppingClassName?: string;
    isCheckVisible?: boolean;
    isRowHeader?: boolean;
    checkboxCellClassName?: string;
    className?: string;
    compact?: boolean;
    // (undocumented)
    cellStyleProps?: ICellStyleProps;
};

// @public (undocumented)
interface IDetailsRowStyles {
    // (undocumented)
    cell: IStyle;
    // (undocumented)
    cellMeasurer: IStyle;
    // (undocumented)
    cellPadded: IStyle;
    // (undocumented)
    cellUnpadded: IStyle;
    // (undocumented)
    check: IStyle;
    // (undocumented)
    checkCell: IStyle;
    // (undocumented)
    checkCover: IStyle;
    // (undocumented)
    fields: IStyle;
    // (undocumented)
    isMultiline: IStyle;
    // (undocumented)
    isRowHeader: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    shimmer: IStyle;
    // (undocumented)
    shimmerBottomBorder: IStyle;
    // (undocumented)
    shimmerIconPlaceholder: IStyle;
    // (undocumented)
    shimmerLeftBorder: IStyle;
}

// @public (undocumented)
interface IDialog {
}

// @public (undocumented)
interface IDialogContent {
}

// @public (undocumented)
interface IDialogContentProps extends React.ClassAttributes<DialogContentBase> {
    className?: string;
    closeButtonAriaLabel?: string;
    componentRef?: IRefObject<IDialogContent>;
    isMultiline?: boolean;
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    responsiveMode?: ResponsiveMode;
    showCloseButton?: boolean;
    styles?: IStyleFunctionOrObject<IDialogContentStyleProps, IDialogContentStyles>;
    subText?: string;
    subTextId?: string;
    theme?: ITheme;
    title?: string;
    titleId?: string;
    topButtonsProps?: IButtonProps[];
    type?: DialogType;
}

// @public (undocumented)
interface IDialogContentStyleProps {
    className?: string;
    // (undocumented)
    hidden?: boolean;
    // (undocumented)
    isClose?: boolean;
    // (undocumented)
    isLargeHeader?: boolean;
    isMultiline?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDialogContentStyles {
    // (undocumented)
    button: IStyle;
    content: IStyle;
    // (undocumented)
    header: IStyle;
    // (undocumented)
    inner: IStyle;
    // (undocumented)
    innerContent: IStyle;
    // (undocumented)
    subText: IStyle;
    // (undocumented)
    title: IStyle;
    // (undocumented)
    topButton: IStyle;
}

// @public (undocumented)
interface IDialogFooter {
}

// @public (undocumented)
interface IDialogFooterProps extends React.Props<DialogFooterBase> {
    className?: string;
    componentRef?: IRefObject<IDialogFooter>;
    styles?: IStyleFunctionOrObject<IDialogFooterStyleProps, IDialogFooterStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDialogFooterStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDialogFooterStyles {
    // (undocumented)
    action: IStyle;
    actions: IStyle;
    // (undocumented)
    actionsRight: IStyle;
}

// @public (undocumented)
interface IDialogProps extends React.ClassAttributes<DialogBase>, IWithResponsiveModeState, IAccessiblePopupProps {
    // @deprecated
    ariaDescribedById?: string;
    // @deprecated
    ariaLabelledById?: string;
    // @deprecated
    className?: string;
    componentRef?: IRefObject<IDialog>;
    // @deprecated
    containerClassName?: string;
    // @deprecated
    contentClassName?: string;
    dialogContentProps?: IDialogContentProps;
    hidden?: boolean;
    // @deprecated
    isBlocking?: boolean;
    // @deprecated
    isDarkOverlay?: boolean;
    // @deprecated
    isOpen?: boolean;
    maxWidth?: ICSSRule | ICSSPixelUnitRule;
    minWidth?: ICSSRule | ICSSPixelUnitRule;
    modalProps?: IModalProps;
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    // @deprecated
    onDismissed?: () => any;
    // @deprecated
    onLayerDidMount?: () => void;
    // @deprecated
    onLayerMounted?: () => void;
    styles?: IStyleFunctionOrObject<IDialogStyleProps, IDialogStyles>;
    // @deprecated
    subText?: string;
    theme?: ITheme;
    // @deprecated
    title?: string;
    // @deprecated
    topButtonsProps?: IButtonProps[];
    // @deprecated
    type?: DialogType;
}

// @public (undocumented)
interface IDialogState {
    // (undocumented)
    hasBeenOpened?: boolean;
    // (undocumented)
    id?: string;
    // (undocumented)
    isOpen?: boolean;
    // (undocumented)
    isVisible?: boolean;
    // (undocumented)
    isVisibleClose?: boolean;
    // (undocumented)
    modalRectangleTop?: number;
}

// @public (undocumented)
interface IDialogStyleProps {
    className?: string;
    // @deprecated
    containerClassName?: string;
    // @deprecated
    contentClassName?: string;
    dialogDefaultMaxWidth?: string | ICSSRule | ICSSPixelUnitRule;
    dialogDefaultMinWidth?: string | ICSSRule | ICSSPixelUnitRule;
    hidden?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDialogStyles {
    // (undocumented)
    main: IStyle;
    root: IStyle;
}

// @public (undocumented)
interface IDividerAsProps extends IIconProps {
    item?: IBreadcrumbItem;
}

// @public (undocumented)
interface IDocumentCard {
    focus: () => void;
}

// @public (undocumented)
interface IDocumentCardActions {
}

// @public (undocumented)
interface IDocumentCardActionsProps extends React.ClassAttributes<DocumentCardActionsBase> {
    actions: IButtonProps[];
    className?: string;
    componentRef?: IRefObject<IDocumentCardActions>;
    styles?: IStyleFunctionOrObject<IDocumentCardActionsStyleProps, IDocumentCardActionsStyles>;
    theme?: ITheme;
    views?: Number;
}

// @public (undocumented)
interface IDocumentCardActionsStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardActionsStyles {
    // (undocumented)
    action: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    views: IStyle;
    // (undocumented)
    viewsIcon: IStyle;
}

// @public (undocumented)
interface IDocumentCardActivity {
}

// @public (undocumented)
interface IDocumentCardActivityPerson {
    allowPhoneInitials?: boolean;
    initials?: string;
    initialsColor?: PersonaInitialsColor;
    name: string;
    profileImageSrc: string;
}

// @public (undocumented)
interface IDocumentCardActivityProps extends React.ClassAttributes<DocumentCardActivityBase> {
    activity: string;
    className?: string;
    componentRef?: IRefObject<IDocumentCardActivity>;
    people: IDocumentCardActivityPerson[];
    styles?: IStyleFunctionOrObject<IDocumentCardActivityStyleProps, IDocumentCardActivityStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardActivityStyleProps {
    className?: string;
    multiplePeople?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardActivityStyles {
    // (undocumented)
    activity: IStyle;
    // (undocumented)
    avatar: IStyle;
    // (undocumented)
    avatars: IStyle;
    // (undocumented)
    details: IStyle;
    // (undocumented)
    name: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardDetails {
}

// @public (undocumented)
interface IDocumentCardDetailsProps extends React.Props<DocumentCardDetailsBase> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardDetails>;
    styles?: IStyleFunctionOrObject<IDocumentCardDetailsStyleProps, IDocumentCardDetailsStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardDetailsStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardDetailsStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardImage {
}

// @public (undocumented)
interface IDocumentCardImageProps extends IBaseProps<{}> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardImage>;
    height?: number;
    iconProps?: IIconProps;
    imageFit?: ImageFit;
    imageSrc?: string;
    styles?: IStyleFunctionOrObject<IDocumentCardImageStyleProps, IDocumentCardImageStyles>;
    theme?: ITheme;
    width?: number;
}

// @public (undocumented)
interface IDocumentCardImageStyleProps extends IDocumentCardImageProps {
}

// @public (undocumented)
interface IDocumentCardImageStyles {
    // (undocumented)
    centeredIcon: IStyle;
    // (undocumented)
    centeredIconWrapper: IStyle;
    // (undocumented)
    cornerIcon: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardLocation {
}

// @public (undocumented)
interface IDocumentCardLocationProps extends React.ClassAttributes<DocumentCardLocationBase> {
    ariaLabel?: string;
    className?: string;
    componentRef?: IRefObject<IDocumentCardLocation>;
    location: string;
    locationHref?: string;
    onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
    styles?: IStyleFunctionOrObject<IDocumentCardLocationStyleProps, IDocumentCardLocationStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardLocationStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardLocationStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardLogo {
}

// @public (undocumented)
interface IDocumentCardLogoProps extends React.ClassAttributes<DocumentCardLogoBase> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardLogo>;
    logoIcon: string;
    logoName?: string;
    styles?: IStyleFunctionOrObject<IDocumentCardLogoStyleProps, IDocumentCardLogoStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardLogoStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardLogoStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardPreview {
}

// @public (undocumented)
interface IDocumentCardPreviewImage {
    // @deprecated
    accentColor?: string;
    componentRef?: IRefObject<{}>;
    // @deprecated
    errorImageSrc?: string;
    height?: number;
    iconSrc?: string;
    imageFit?: ImageFit;
    linkProps?: ILinkProps;
    name?: string;
    previewIconContainerClass?: string;
    previewIconProps?: IIconProps;
    previewImageSrc?: string;
    // @deprecated
    url?: string;
    width?: number;
}

// @public (undocumented)
interface IDocumentCardPreviewProps extends IBaseProps<{}> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardPreview>;
    getOverflowDocumentCountText?: (overflowCount: number) => string;
    previewImages: IDocumentCardPreviewImage[];
    styles?: IStyleFunctionOrObject<IDocumentCardPreviewStyleProps, IDocumentCardPreviewStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardPreviewStyleProps {
    className?: string;
    isFileList?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardPreviewStyles {
    // (undocumented)
    fileList: IStyle;
    // (undocumented)
    fileListIcon: IStyle;
    // (undocumented)
    fileListOverflowText: IStyle;
    // (undocumented)
    previewFileTypeIcon: IStyle;
    // (undocumented)
    previewIcon: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardProps extends IBaseProps<IDocumentCard>, React.HTMLAttributes<HTMLDivElement> {
    // @deprecated
    accentColor?: string;
    children?: React.ReactNode;
    className?: string;
    componentRef?: IRefObject<IDocumentCard>;
    onClick?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    onClickHref?: string;
    role?: string;
    styles?: IStyleFunctionOrObject<IDocumentCardStyleProps, IDocumentCardStyles>;
    theme?: ITheme;
    type?: DocumentCardType;
}

// @public (undocumented)
interface IDocumentCardStatus {
}

// @public (undocumented)
interface IDocumentCardStatusProps extends React.Props<DocumentCardStatusBase> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardStatus>;
    status: string;
    statusIcon?: string;
    styles?: IStyleFunctionOrObject<IDocumentCardStatusStyleProps, IDocumentCardStatusStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDocumentCardStatusStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardStatusStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardStyleProps {
    actionable?: boolean;
    className?: string;
    compact?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDocumentCardTitle {
}

// @public (undocumented)
interface IDocumentCardTitleProps extends React.ClassAttributes<DocumentCardTitleBase> {
    className?: string;
    componentRef?: IRefObject<IDocumentCardTitle>;
    shouldTruncate?: boolean;
    showAsSecondaryTitle?: boolean;
    styles?: IStyleFunctionOrObject<IDocumentCardTitleStyleProps, IDocumentCardTitleStyles>;
    theme?: ITheme;
    title: string;
}

// @public (undocumented)
interface IDocumentCardTitleStyleProps {
    className?: string;
    showAsSecondaryTitle?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IDocumentCardTitleStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IDropdown {
    // (undocumented)
    focus: (shouldOpenOnFocus?: boolean) => void;
}

// @public
interface IDropdownInternalProps extends IDropdownProps, IWithResponsiveModeState {
}

// @public (undocumented)
interface IDropdownOption extends ISelectableOption {
    // @deprecated
    isSelected?: boolean;
}

// @public (undocumented)
interface IDropdownProps extends ISelectableDroppableTextProps<IDropdown, HTMLDivElement> {
    defaultSelectedKeys?: string[] | number[];
    dropdownWidth?: number;
    // @deprecated
    isDisabled?: boolean;
    keytipProps?: IKeytipProps;
    multiSelect?: boolean;
    multiSelectDelimiter?: string;
    notifyOnReselect?: boolean;
    onChange?: (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => void;
    // @deprecated (undocumented)
    onChanged?: (option: IDropdownOption, index?: number) => void;
    onDismiss?: () => void;
    onRenderCaretDown?: IRenderFunction<IDropdownProps>;
    onRenderPlaceHolder?: IRenderFunction<IDropdownProps>;
    onRenderTitle?: IRenderFunction<IDropdownOption | IDropdownOption[]>;
    options: IDropdownOption[];
    // @deprecated
    placeHolder?: string;
    responsiveMode?: ResponsiveMode;
    selectedKeys?: string[] | number[];
    styles?: IStyleFunctionOrObject<IDropdownStyleProps, IDropdownStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IDropdownState {
    // (undocumented)
    calloutRenderEdge?: RectangleEdge;
    hasFocus: boolean;
    // (undocumented)
    isOpen: boolean;
    // (undocumented)
    selectedIndices: number[];
}

// @public
declare type IDropdownStyleProps = Pick<IDropdownProps, 'theme' | 'className' | 'disabled' | 'required'> & {
    hasError: boolean;
    isOpen: boolean;
    isRenderingPlaceholder: boolean;
    panelClassName?: string;
    calloutClassName?: string;
    calloutRenderEdge?: RectangleEdge;
};

// @public
interface IDropdownStyles {
    callout: IStyle;
    caretDown: IStyle;
    caretDownWrapper: IStyle;
    dropdown: IStyle;
    dropdownDivider: IStyle;
    dropdownItem: IStyle;
    dropdownItemDisabled: IStyle;
    dropdownItemHeader: IStyle;
    dropdownItems: IStyle;
    dropdownItemSelected: IStyle;
    dropdownItemSelectedAndDisabled: IStyle;
    dropdownItemsWrapper: IStyle;
    dropdownOptionText: IStyle;
    errorMessage: IStyle;
    label: IStyle;
    panel: IStyle;
    root: IStyle;
    subComponentStyles: IDropdownSubComponentStyles;
    title: IStyle;
}

// @public (undocumented)
interface IDropdownSubComponentStyles {
    label: IStyleFunctionOrObject<ILabelStyleProps, any>;
    panel: IStyleFunctionOrObject<IPanelStyleProps, any>;
}

// @public
interface IEntityRect {
    // (undocumented)
    height: number;
    // (undocumented)
    width: number;
}

// @public (undocumented)
interface IExpandingCard {
}

// @public
interface IExpandingCardProps extends IBaseCardProps<IExpandingCard, IExpandingCardStyles, IExpandingCardStyleProps> {
    compactCardHeight?: number;
    expandedCardHeight?: number;
    mode?: ExpandingCardMode;
    onRenderCompactCard?: IRenderFunction<any>;
    onRenderExpandedCard?: IRenderFunction<any>;
}

// @public (undocumented)
interface IExpandingCardState {
    // (undocumented)
    firstFrameRendered: boolean;
    // (undocumented)
    needsScroll: boolean;
}

// @public (undocumented)
interface IExpandingCardStyleProps extends IBaseCardStyleProps {
    compactCardHeight?: number;
    expandedCardFirstFrameRendered?: boolean;
    expandedCardHeight?: number;
    needsScroll?: boolean;
}

// @public (undocumented)
interface IExpandingCardStyles extends IBaseCardStyles {
    compactCard?: IStyle;
    expandedCard?: IStyle;
    expandedCardScroll?: IStyle;
}

// @public (undocumented)
interface IExtendedPeoplePickerProps extends IBaseExtendedPickerProps<IPersonaProps> {
}

// @public (undocumented)
interface IExtendedPersonaProps extends IPersonaProps {
    // (undocumented)
    blockRecipientRemoval?: boolean;
    // (undocumented)
    canExpand?: boolean;
    // (undocumented)
    isEditing?: boolean;
    // (undocumented)
    isValid: boolean;
    // (undocumented)
    shouldBlockSelection?: boolean;
}

// @public (undocumented)
interface IFabricProps extends React.HTMLAttributes<HTMLDivElement> {
    // (undocumented)
    componentRef?: IRefObject<{}>;
    // (undocumented)
    styles?: IStyleFunctionOrObject<IFabricStyleProps, IFabricStyles>;
    // (undocumented)
    theme?: ITheme;
}

// @public (undocumented)
interface IFabricStyleProps extends IFabricProps {
    // (undocumented)
    isFocusVisible: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IFabricStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IFacepile {
}

// @public (undocumented)
interface IFacepilePersona extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement> {
    allowPhoneInitials?: boolean;
    data?: any;
    imageInitials?: string;
    imageUrl?: string;
    initialsColor?: PersonaInitialsColor;
    keytipProps?: IKeytipProps;
    onClick?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    onMouseMove?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    onMouseOut?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    personaName?: string;
}

// @public (undocumented)
interface IFacepileProps extends React.ClassAttributes<FacepileBase> {
    addButtonProps?: IButtonProps;
    ariaDescription?: string;
    // @deprecated
    chevronButtonProps?: IButtonProps;
    className?: string;
    componentRef?: IRefObject<IFacepile>;
    getPersonaProps?: (persona: IFacepilePersona) => IPersonaSharedProps;
    maxDisplayablePersonas?: number;
    overflowButtonProps?: IButtonProps;
    overflowButtonType?: OverflowButtonType;
    overflowPersonas?: IFacepilePersona[];
    personas: IFacepilePersona[];
    personaSize?: PersonaSize;
    showAddButton?: boolean;
    styles?: IStyleFunctionOrObject<IFacepileStyleProps, IFacepileStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IFacepileStyleProps {
    className?: string;
    spacingAroundItemButton?: number;
    theme: ITheme;
}

// @public (undocumented)
interface IFacepileStyles {
    // (undocumented)
    addButton: IStyle;
    // (undocumented)
    descriptiveOverflowButton: IStyle;
    // (undocumented)
    itemButton: IStyle;
    // (undocumented)
    itemContainer: IStyle;
    // (undocumented)
    member: IStyle;
    // (undocumented)
    members: IStyle;
    // (undocumented)
    overflowButton: IStyle;
    // (undocumented)
    overflowInitialsIcon: IStyle;
    root: IStyle;
    // (undocumented)
    screenReaderOnly: IStyle;
}

// @public (undocumented)
interface IFocusTrapCalloutProps extends ICalloutProps {
    focusTrapProps?: IFocusTrapZoneProps;
}

// @public (undocumented)
interface IFocusTrapZone {
    focus: () => void;
}

// @public (undocumented)
interface IFocusTrapZoneProps extends React.HTMLAttributes<HTMLDivElement> {
    ariaLabelledBy?: string;
    componentRef?: IRefObject<IFocusTrapZone>;
    disableFirstFocus?: boolean;
    elementToFocusOnDismiss?: HTMLElement;
    firstFocusableSelector?: string | (() => string);
    focusPreviouslyFocusedInnerElement?: boolean;
    forceFocusInsideTrap?: boolean;
    ignoreExternalFocusing?: boolean;
    isClickableOutsideFocusTrap?: boolean;
}

// @public
interface IFocusZone {
    focus(forceIntoFirstElement?: boolean): boolean;
    focusElement(childElement?: HTMLElement): boolean;
}

// @public
interface IFocusZoneProps extends React.HTMLAttributes<HTMLElement | FocusZone> {
    allowFocusRoot?: boolean;
    // @deprecated
    allowTabKey?: boolean;
    ariaDescribedBy?: string;
    ariaLabelledBy?: string;
    checkForNoWrap?: boolean;
    className?: string;
    componentRef?: IRefObject<IFocusZone>;
    defaultActiveElement?: string;
    direction?: FocusZoneDirection;
    disabled?: boolean;
    doNotAllowFocusEventToPropagate?: boolean;
    elementType?: keyof React.ReactHTML;
    handleTabKey?: FocusZoneTabbableElements;
    isCircularNavigation?: boolean;
    isInnerZoneKeystroke?: (ev: React.KeyboardEvent<HTMLElement>) => boolean;
    onActiveElementChanged?: (element?: HTMLElement, ev?: React.FocusEvent<HTMLElement>) => void;
    onBeforeFocus?: (childElement?: HTMLElement) => boolean;
    onFocusNotification?: () => void;
    // @deprecated
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    shouldInputLoseFocusOnArrowKey?: (inputElement: HTMLInputElement) => boolean;
}

// @public (undocumented)
interface IGap extends IShimmerElement {
    height?: number;
    width?: number | string;
}

// @public (undocumented)
interface IGenericItem {
    // (undocumented)
    imageInitials: string;
    // (undocumented)
    primaryText: string;
    // (undocumented)
    ValidationState: ValidationState;
}

// @public (undocumented)
interface IGrid {
}

// @public (undocumented)
interface IGridCellProps<T> {
    cellDisabledStyle?: string[];
    cellIsSelectedStyle?: string[];
    className?: string;
    disabled?: boolean;
    getClassNames?: (theme: ITheme, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined) => IButtonClassNames;
    id: string;
    index?: number;
    item: T;
    label?: string;
    onClick?: (item: T) => void;
    onFocus?: (item: T) => void;
    onHover?: (item?: T) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    onMouseLeave?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseMove?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    onRenderItem: (item: T) => JSX.Element;
    onWheel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    role?: string;
    selected?: boolean;
}

// @public (undocumented)
interface IGridProps {
    columnCount: number;
    componentRef?: IRefObject<IGrid>;
    // @deprecated
    containerClassName?: string;
    doNotContainWithinFocusZone?: boolean;
    items: any[];
    onBlur?: () => void;
    onRenderItem: (item: any, index: number) => JSX.Element;
    positionInSet?: number;
    setSize?: number;
    shouldFocusCircularNavigate?: boolean;
    styles?: IStyleFunctionOrObject<IGridStyleProps, IGridStyles>;
    theme?: ITheme;
}

// @public
interface IGridStyleProps {
    theme: ITheme;
}

// @public
interface IGridStyles {
    focusedContainer?: IStyle;
    root: IStyle;
    tableCell: IStyle;
}

// @public (undocumented)
interface IGroup {
    ariaLabel?: string;
    children?: IGroup[];
    count: number;
    data?: any;
    hasMoreData?: boolean;
    isCollapsed?: boolean;
    isDropEnabled?: boolean;
    // @deprecated
    isSelected?: boolean;
    isShowingAll?: boolean;
    key: string;
    level?: number;
    name: string;
    startIndex: number;
}

// @public (undocumented)
interface IGroupDividerProps {
    compact?: boolean;
    // (undocumented)
    componentRef?: IRefObject<{}>;
    expandButtonProps?: React.HTMLAttributes<HTMLButtonElement>;
    footerText?: string;
    group?: IGroup;
    groupIndex?: number;
    groupLevel?: number;
    groups?: IGroup[];
    indentWidth?: number;
    isCollapsedGroupSelectVisible?: boolean;
    isGroupLoading?: (group: IGroup) => boolean;
    // @deprecated
    isSelected?: boolean;
    loadingText?: string;
    onGroupHeaderClick?: (group: IGroup) => void;
    onRenderTitle?: IRenderFunction<IGroupDividerProps>;
    onToggleCollapse?: (group: IGroup) => void;
    onToggleSelectGroup?: (group: IGroup) => void;
    onToggleSummarize?: (group: IGroup) => void;
    selected?: boolean;
    selectionMode?: SelectionMode;
    showAllLinkText?: string;
    viewport?: IViewport;
}

// @public (undocumented)
interface IGroupedList extends IList {
    forceUpdate: () => void;
    toggleCollapseAll: (allCollapsed: boolean) => void;
}

// @public (undocumented)
interface IGroupedListProps extends React.ClassAttributes<GroupedListBase> {
    className?: string;
    compact?: boolean;
    componentRef?: IRefObject<IGroupedList>;
    dragDropEvents?: IDragDropEvents;
    dragDropHelper?: IDragDropHelper;
    eventsToRegister?: {
        // (undocumented)
        eventName: string;
        // (undocumented)
        callback: (context: IDragDropContext, event?: any) => void;
    }[];
    getGroupHeight?: (group: IGroup, groupIndex: number) => number;
    groupProps?: IGroupRenderProps;
    groups?: IGroup[];
    items: any[];
    listProps?: IListProps;
    onGroupExpandStateChanged?: (isSomeGroupExpanded: boolean) => void;
    onRenderCell: (nestingDepth?: number, item?: any, index?: number) => React.ReactNode;
    onShouldVirtualize?: (props: IListProps) => boolean;
    selection?: ISelection;
    selectionMode?: SelectionMode;
    styles?: IStyleFunctionOrObject<IGroupedListStyleProps, IGroupedListStyles>;
    theme?: ITheme;
    usePageCache?: boolean;
    viewport?: IViewport;
}

// @public (undocumented)
interface IGroupedListState {
    // (undocumented)
    groups?: IGroup[];
    // (undocumented)
    lastSelectionMode?: SelectionMode;
    // (undocumented)
    lastWidth?: number;
}

// @public (undocumented)
declare type IGroupedListStyleProps = Required<Pick<IGroupedListProps, 'theme'>> & Pick<IGroupedListProps, 'className'> & {
    isCollapsed?: boolean;
    compact?: boolean;
};

// @public (undocumented)
interface IGroupedListStyles {
    // (undocumented)
    group: IStyle;
    // (undocumented)
    groupIsDropping: IStyle;
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IGroupRenderProps {
    collapseAllVisibility?: CollapseAllVisibility;
    footerProps?: IGroupDividerProps;
    getGroupItemLimit?: (group: IGroup) => number;
    headerProps?: IGroupDividerProps;
    isAllGroupsCollapsed?: boolean;
    onRenderFooter?: IRenderFunction<IGroupDividerProps>;
    onRenderHeader?: IRenderFunction<IGroupDividerProps>;
    onRenderShowAll?: IRenderFunction<IGroupDividerProps>;
    onToggleCollapseAll?: (isAllCollapsed: boolean) => void;
    showAllProps?: IGroupDividerProps;
    showEmptyGroups?: boolean;
}

// @public (undocumented)
interface IHoverCard {
}

// @public
interface IHoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
    cardDismissDelay?: number;
    cardOpenDelay?: number;
    className?: string;
    componentRef?: IRefObject<IHoverCard>;
    expandedCardOpenDelay?: number;
    expandingCardProps?: IExpandingCardProps;
    instantOpenOnClick?: boolean;
    onCardExpand?: () => void;
    onCardHide?: () => void;
    onCardVisible?: () => void;
    openHotKey?: KeyCodes;
    plainCardProps?: IPlainCardProps;
    setAriaDescribedBy?: boolean;
    setInitialFocus?: boolean;
    shouldBlockHoverCard?: () => void;
    sticky?: boolean;
    styles?: IStyleFunctionOrObject<IHoverCardStyleProps, IHoverCardStyles>;
    target?: HTMLElement | string;
    theme?: ITheme;
    trapFocus?: boolean;
    type?: HoverCardType;
}

// @public (undocumented)
interface IHoverCardState {
    // (undocumented)
    isHoverCardVisible?: boolean;
    // (undocumented)
    mode?: ExpandingCardMode;
    // (undocumented)
    openMode?: OpenCardMode;
}

// @public (undocumented)
interface IHoverCardStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IHoverCardStyles {
    host?: IStyle;
}

// @public (undocumented)
interface IHSL {
    // (undocumented)
    h: number;
    // (undocumented)
    l: number;
    // (undocumented)
    s: number;
}

// @public (undocumented)
interface IHSV {
    // (undocumented)
    h: number;
    // (undocumented)
    s: number;
    // (undocumented)
    v: number;
}

// @public (undocumented)
interface IIconProps extends IBaseProps, React.HTMLAttributes<HTMLElement> {
    ariaLabel?: string;
    iconName?: string;
    iconType?: IconType;
    imageErrorAs?: React.StatelessComponent<IImageProps> | React.ComponentClass<IImageProps>;
    imageProps?: IImageProps;
    styles?: IStyleFunctionOrObject<IIconStyleProps, IIconStyles>;
    // (undocumented)
    theme?: ITheme;
}

// @public (undocumented)
interface IIconState {
    // (undocumented)
    imageLoadError: boolean;
}

// @public (undocumented)
interface IIconStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    iconClassName?: string;
    // (undocumented)
    isImage: boolean;
    // (undocumented)
    isPlaceholder: boolean;
    // (undocumented)
    styles?: Partial<IIconStyles>;
    // (undocumented)
    theme?: ITheme;
}

// @public (undocumented)
interface IIconStyles {
    // @deprecated
    imageContainer?: IStyle;
    // (undocumented)
    root?: IStyle;
}

// @public (undocumented)
interface IImage {
}

// @public (undocumented)
interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    componentRef?: IRefObject<IImage>;
    coverStyle?: ImageCoverStyle;
    // @deprecated
    errorSrc?: string;
    imageFit?: ImageFit;
    maximizeFrame?: boolean;
    onLoadingStateChange?: (loadState: ImageLoadState) => void;
    shouldFadeIn?: boolean;
    shouldStartVisible?: boolean;
    styles?: IStyleFunctionOrObject<IImageStyleProps, IImageStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IImageState {
    // (undocumented)
    loadState?: ImageLoadState;
}

// @public (undocumented)
interface IImageStyleProps {
    className?: string;
    height?: number | string;
    isCenter?: boolean;
    // (undocumented)
    isCenterCover?: boolean;
    // (undocumented)
    isContain?: boolean;
    // (undocumented)
    isCover?: boolean;
    isError?: boolean;
    isLandscape?: boolean;
    isLoaded?: boolean;
    // (undocumented)
    isNone?: boolean;
    isNotImageFit?: boolean;
    maximizeFrame?: boolean;
    shouldFadeIn?: boolean;
    shouldStartVisible?: boolean;
    theme: ITheme;
    width?: number | string;
}

// @public (undocumented)
interface IImageStyles {
    image: IStyle;
    root: IStyle;
}

// @public
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    'aria-label'?: string;
    defaultVisibleValue?: string;
}

// @public (undocumented)
interface IKeytip {
}

// @public (undocumented)
interface IKeytipLayer {
}

// @public (undocumented)
interface IKeytipLayerProps extends React.ClassAttributes<IKeytipLayer> {
    componentRef?: IRefObject<IKeytipLayer>;
    content: string;
    keytipExitSequences?: IKeytipTransitionKey[];
    keytipReturnSequences?: IKeytipTransitionKey[];
    keytipStartSequences?: IKeytipTransitionKey[];
    onEnterKeytipMode?: () => void;
    onExitKeytipMode?: (ev?: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void;
    styles?: IStyleFunctionOrObject<IKeytipLayerStyleProps, IKeytipLayerStyles>;
}

// @public (undocumented)
interface IKeytipLayerState {
    // (undocumented)
    inKeytipMode: boolean;
    // (undocumented)
    keytips: IKeytipProps[];
    // (undocumented)
    visibleKeytips: IKeytipProps[];
}

// @public (undocumented)
interface IKeytipLayerStyleProps {
}

// @public (undocumented)
interface IKeytipLayerStyles {
    // (undocumented)
    innerContent: IStyle;
}

// @public (undocumented)
interface IKeytipProps {
    calloutProps?: ICalloutProps;
    componentRef?: IRefObject<IKeytip>;
    content: string;
    disabled?: boolean;
    hasDynamicChildren?: boolean;
    hasMenu?: boolean;
    keySequences: string[];
    offset?: IPoint;
    onExecute?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    onReturn?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    overflowSetSequence?: string[];
    styles?: IStyleFunctionOrObject<IKeytipStyleProps, IKeytipStyles>;
    theme?: ITheme;
    visible?: boolean;
}

// @public
interface IKeytipStyleProps {
    disabled?: boolean;
    theme: ITheme;
    visible?: boolean;
}

// @public (undocumented)
interface IKeytipStyles {
    container: IStyle;
    root: IStyle;
}

// @public (undocumented)
interface ILabel {
}

// @public (undocumented)
interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    as?: IComponentAs<React.AllHTMLAttributes<HTMLElement>>;
    componentRef?: IRefObject<ILabel>;
    disabled?: boolean;
    required?: boolean;
    styles?: IStyleFunctionOrObject<ILabelStyleProps, ILabelStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ILabelStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    required?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface ILabelStyles {
    root: IStyle;
}

// @public (undocumented)
interface ILayer {
}

// @public (undocumented)
declare type ILayerBaseState = {
    // (undocumented)
    hasMounted: boolean;
};

// @public (undocumented)
interface ILayerProps extends React.HTMLAttributes<HTMLDivElement | LayerBase> {
    className?: string;
    componentRef?: IRefObject<ILayer>;
    eventBubblingEnabled?: boolean;
    hostId?: string;
    onLayerDidMount?: () => void;
    onLayerMounted?: () => void;
    onLayerWillUnmount?: () => void;
    styles?: IStyleFunctionOrObject<ILayerStyleProps, ILayerStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ILayerStyleProps {
    className?: string;
    isNotHost?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface ILayerStyles {
    content?: IStyle;
    root?: IStyle;
}

// @public (undocumented)
interface ILine extends IShimmerElement {
    height?: number;
    width?: number | string;
}

// @public (undocumented)
interface ILink {
    focus(): void;
}

// @public (undocumented)
interface ILinkHTMLAttributes<T> extends React.HTMLAttributes<T> {
    // (undocumented)
    [index: string]: any;
    // (undocumented)
    autoFocus?: boolean;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    download?: any;
    // (undocumented)
    form?: string;
    // (undocumented)
    formAction?: string;
    // (undocumented)
    formEncType?: string;
    // (undocumented)
    formMethod?: string;
    // (undocumented)
    formNoValidate?: boolean;
    // (undocumented)
    formTarget?: string;
    // (undocumented)
    href?: string;
    // (undocumented)
    hrefLang?: string;
    // (undocumented)
    media?: string;
    // (undocumented)
    name?: string;
    // (undocumented)
    rel?: string;
    // (undocumented)
    target?: string;
    // (undocumented)
    type?: string;
    // (undocumented)
    value?: string | string[] | number;
}

// @public (undocumented)
interface ILinkProps extends ILinkHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement | LinkBase> {
    as?: string | React.ComponentClass | React.StatelessComponent;
    componentRef?: IRefObject<ILink>;
    disabled?: boolean;
    keytipProps?: IKeytipProps;
    styles?: IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ILinkStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    isButton?: boolean;
    // (undocumented)
    isDisabled?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface ILinkStyles {
    // (undocumented)
    root: IStyle;
}

// @public (undocumented)
interface IList {
    forceUpdate: () => void;
    getStartItemIndexInView: () => number;
    scrollToIndex: (index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode) => void;
}

// @public (undocumented)
interface IListProps extends React.HTMLAttributes<List | HTMLDivElement> {
    className?: string;
    componentRef?: IRefObject<IList>;
    getItemCountForPage?: (itemIndex?: number, visibleRect?: IRectangle) => number;
    getKey?: (item: any, index?: number) => string;
    getPageHeight?: (itemIndex?: number, visibleRect?: IRectangle) => number;
    getPageSpecification?: (itemIndex?: number, visibleRect?: IRectangle) => IPageSpecification;
    getPageStyle?: (page: IPage) => any;
    items?: any[];
    onPageAdded?: (page: IPage) => void;
    onPageRemoved?: (page: IPage) => void;
    onPagesUpdated?: (pages: IPage[]) => void;
    onRenderCell?: (item?: any, index?: number, isScrolling?: boolean) => React.ReactNode;
    onRenderPage?: (pageProps: IPageProps, defaultRender?: IRenderFunction<IPageProps>) => React.ReactNode;
    onShouldVirtualize?: (props: IListProps) => boolean;
    renderCount?: number;
    renderedWindowsAhead?: number;
    renderedWindowsBehind?: number;
    role?: string;
    startIndex?: number;
    usePageCache?: boolean;
}

// @public (undocumented)
interface IListState {
    // (undocumented)
    isScrolling?: boolean;
    measureVersion?: number;
    // (undocumented)
    pages?: IPage[];
}

// @public (undocumented)
declare const Image: (props: IImageProps) => JSX.Element;

// @public (undocumented)
declare class ImageBase extends BaseComponent<IImageProps, IImageState> {
    // (undocumented)
    constructor(props: IImageProps);
    // (undocumented)
    componentDidUpdate(prevProps: IImageProps, prevState: IImageState): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: IImageProps): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        shouldFadeIn: boolean;
    };
    // (undocumented)
    render(): JSX.Element;
    }

// @public
declare enum ImageCoverStyle {
    landscape = 0,
    portrait = 1,
}

// @public
declare enum ImageFit {
    center = 0,
    centerCover = 4,
    contain = 1,
    cover = 2,
    none = 3,
}

// @public (undocumented)
declare enum ImageLoadState {
    error = 2,
    // @deprecated
    errorLoaded = 3,
    loaded = 1,
    notLoaded = 0,
}

// @public (undocumented)
interface IMarqueeSelection {
}

// @public (undocumented)
interface IMarqueeSelectionProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    componentRef?: IRefObject<IMarqueeSelection>;
    isDraggingConstrainedToRoot?: boolean;
    isEnabled?: boolean;
    onShouldStartSelection?: (ev: MouseEvent) => boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    selection: ISelection;
    styles?: IStyleFunction<IMarqueeSelectionStyleProps, IMarqueeSelectionStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IMarqueeSelectionStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IMarqueeSelectionStyles {
    // (undocumented)
    box?: IStyle;
    // (undocumented)
    boxFill?: IStyle;
    // (undocumented)
    dragMask?: IStyle;
    // (undocumented)
    root?: IStyle;
}

// @public
interface IMaskedTextFieldState {
    displayValue: string;
    maskCursorPosition?: number;
}

// @public (undocumented)
interface IMenuItemStyles extends IButtonStyles {
    anchorLink: IStyle;
    checkmarkIcon: IStyle;
    divider: IStyle;
    iconColor: IStyle;
    item: IStyle;
    linkContent: IStyle;
    subMenuIcon: IStyle;
}

// @public (undocumented)
interface IMessageBar {
}

// @public (undocumented)
interface IMessageBarProps extends React.HTMLAttributes<HTMLElement> {
    actions?: JSX.Element;
    ariaLabel?: string;
    className?: string;
    componentRef?: IRefObject<IMessageBar>;
    dismissButtonAriaLabel?: string;
    isMultiline?: boolean;
    messageBarType?: MessageBarType;
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement | BaseButton | HTMLAnchorElement | HTMLDivElement | Button>) => any;
    overflowButtonAriaLabel?: string;
    styles?: IStyleFunctionOrObject<IMessageBarStyleProps, IMessageBarStyles>;
    theme?: ITheme;
    truncated?: boolean;
}

// @public (undocumented)
interface IMessageBarState {
    // (undocumented)
    expandSingleLine?: boolean;
    // (undocumented)
    labelId?: string;
    // (undocumented)
    showContent?: boolean;
}

// @public (undocumented)
interface IMessageBarStyleProps {
    actions?: boolean;
    className?: string;
    expandSingleLine?: boolean;
    isMultiline?: boolean;
    messageBarType?: MessageBarType;
    onDismiss?: boolean;
    theme: ITheme;
    truncated?: boolean;
}

// @public (undocumented)
interface IMessageBarStyles {
    actions?: IStyle;
    content?: IStyle;
    dismissal?: IStyle;
    dismissSingleLine?: IStyle;
    expand?: IStyle;
    expandSingleLine?: IStyle;
    icon?: IStyle;
    iconContainer?: IStyle;
    innerText?: IStyle;
    root?: IStyle;
    text?: IStyle;
}

// @public (undocumented)
interface IModal {
    focus: () => void;
}

// @public (undocumented)
interface IModalProps extends React.ClassAttributes<ModalBase>, IWithResponsiveModeState, IAccessiblePopupProps {
    className?: string;
    componentRef?: IRefObject<IModal>;
    containerClassName?: string;
    isBlocking?: boolean;
    isDarkOverlay?: boolean;
    isOpen?: boolean;
    layerProps?: ILayerProps;
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    onDismissed?: () => any;
    // @deprecated
    onLayerDidMount?: () => void;
    scrollableContentClassName?: string;
    styles?: IStyleFunctionOrObject<IModalStyleProps, IModalStyles>;
    subtitleAriaId?: string;
    theme?: ITheme;
    titleAriaId?: string;
    topOffsetFixed?: boolean;
}

// @public (undocumented)
declare type IModalStyleProps = Required<Pick<IModalProps, 'theme'>> & Pick<IModalProps, 'className' | 'containerClassName' | 'scrollableContentClassName' | 'topOffsetFixed'> & {
    isOpen?: boolean;
    isVisible?: boolean;
    hasBeenOpened?: boolean;
    modalRectangleTop?: number;
};

// @public (undocumented)
interface IModalStyles {
    // (undocumented)
    main: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    scrollableContent: IStyle;
}

// @public (undocumented)
interface INav {
    selectedKey: string | undefined;
}

// @public (undocumented)
interface INavLink {
    [propertyName: string]: any;
    // @deprecated
    altText?: string;
    ariaLabel?: string;
    automationId?: string;
    // @deprecated
    engagementName?: string;
    forceAnchor?: boolean;
    icon?: string;
    // @deprecated
    iconClassName?: string;
    iconProps?: IIconProps;
    isExpanded?: boolean;
    key?: string;
    links?: INavLink[];
    name: string;
    onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    // @deprecated (undocumented)
    parentId?: string;
    target?: string;
    title?: string;
    url: string;
}

// @public (undocumented)
interface INavLinkGroup {
    automationId?: string;
    collapseByDefault?: boolean;
    links: INavLink[];
    name?: string;
    onHeaderClick?: (ev?: React.MouseEvent<HTMLElement>, isCollapsing?: boolean) => void;
}

// @public (undocumented)
interface INavProps {
    ariaLabel?: string;
    className?: string;
    // @deprecated
    collapsedStateText?: string;
    componentRef?: IRefObject<INav>;
    expandButtonAriaLabel?: string;
    // @deprecated
    expandedStateText?: string;
    groups: INavLinkGroup[] | null;
    initialSelectedKey?: string;
    isOnTop?: boolean;
    linkAs?: IComponentAs<IButtonProps>;
    onLinkClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    onLinkExpandClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    onRenderGroupHeader?: IRenderFunction<INavLinkGroup>;
    onRenderLink?: IRenderFunction<INavLink>;
    selectedKey?: string;
    styles?: IStyleFunctionOrObject<INavStyleProps, INavStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface INavState {
    // (undocumented)
    isGroupCollapsed?: {
        // (undocumented)
        [key: string]: boolean;
    };
    // (undocumented)
    isLinkExpandStateChanged?: boolean;
    // (undocumented)
    selectedKey?: string;
}

// @public (undocumented)
interface INavStyleProps {
    className?: string;
    groups: INavLinkGroup[] | null;
    isButtonEntry?: boolean;
    isExpanded?: boolean;
    isGroup?: boolean;
    isLink?: boolean;
    isOnTop?: boolean;
    isSelected?: boolean;
    leftPadding?: number;
    leftPaddingExpanded?: number;
    navHeight?: number;
    position?: number;
    rightPadding?: number;
    theme: ITheme;
}

// @public (undocumented)
interface INavStyles {
    chevronButton: IStyle;
    chevronIcon: IStyle;
    compositeLink: IStyle;
    group: IStyle;
    groupContent: IStyle;
    link: IStyle;
    linkText: IStyle;
    navItem: IStyle;
    navItems: IStyle;
    root: IStyle;
}

// @public (undocumented)
interface IObjectWithKey {
    // (undocumented)
    key?: string | number;
}

// @public (undocumented)
interface IOverflowSet {
    focus(forceIntoFirstElement?: boolean): boolean;
    focusElement(childElement?: HTMLElement): boolean;
}

// @public (undocumented)
interface IOverflowSetItemProps {
    [propertyName: string]: any;
    key: string;
    keytipProps?: IKeytipProps;
}

// @public (undocumented)
interface IOverflowSetProps extends React.ClassAttributes<OverflowSetBase> {
    className?: string;
    componentRef?: IRefObject<IOverflowSet>;
    doNotContainWithinFocusZone?: boolean;
    focusZoneProps?: IFocusZoneProps;
    items?: IOverflowSetItemProps[];
    itemSubMenuProvider?: (item: IOverflowSetItemProps) => any[] | undefined;
    keytipSequences?: string[];
    onRenderItem: (item: IOverflowSetItemProps) => any;
    onRenderOverflowButton: IRenderFunction<any[]>;
    overflowItems?: IOverflowSetItemProps[];
    role?: string;
    styles?: IStyleFunctionOrObject<IOverflowSetProps, IOverflowSetStyles>;
    vertical?: boolean;
}

// @public
declare type IOverflowSetStyleProps = Pick<IOverflowSetProps, 'vertical' | 'className'>;

// @public (undocumented)
interface IOverflowSetStyles {
    item?: IStyle;
    overflowButton?: IStyle;
    root?: IStyle;
}

// @public (undocumented)
interface IOverlay {
}

// @public (undocumented)
interface IOverlayProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    componentRef?: IRefObject<IOverlay>;
    isDarkThemed?: boolean;
    // (undocumented)
    onClick?: () => void;
    styles?: IStyleFunctionOrObject<IOverlayStyleProps, IOverlayStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IOverlayStyleProps {
    className?: string;
    isDark?: boolean;
    isNone?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IOverlayStyles {
    root: IStyle;
}

// @public (undocumented)
interface IPage {
    // (undocumented)
    data?: any;
    // (undocumented)
    height: number;
    // (undocumented)
    isSpacer?: boolean;
    // (undocumented)
    itemCount: number;
    // (undocumented)
    items: any[] | undefined;
    // (undocumented)
    key: string;
    // (undocumented)
    startIndex: number;
    // (undocumented)
    style: any;
    // (undocumented)
    top: number;
}

// @public (undocumented)
interface IPageProps extends React.HTMLAttributes<HTMLDivElement>, React.ClassAttributes<HTMLDivElement> {
    page: IPage;
    role?: string;
}

// @public (undocumented)
interface IPageSpecification {
    data?: any;
    height?: number;
    itemCount?: number;
    key?: string;
}

// @public (undocumented)
interface IPanel {
    dismiss: (ev?: React.KeyboardEvent<HTMLElement>) => void;
    open: () => void;
}

// @public
interface IPanelHeaderRenderer extends IRenderFunction<IPanelProps> {
    // (undocumented)
    (props?: IPanelProps, defaultRender?: IPanelHeaderRenderer, headerTextId?: string | undefined): JSX.Element | null;
}

// @public (undocumented)
interface IPanelProps extends React.HTMLAttributes<PanelBase> {
    className?: string;
    closeButtonAriaLabel?: string;
    // @deprecated
    componentId?: string;
    componentRef?: IRefObject<IPanel>;
    customWidth?: string;
    elementToFocusOnDismiss?: HTMLElement;
    // @deprecated
    firstFocusableSelector?: string;
    focusTrapZoneProps?: IFocusTrapZoneProps;
    // @deprecated
    forceFocusInsideTrap?: boolean;
    hasCloseButton?: boolean;
    headerClassName?: string;
    headerText?: string;
    // @deprecated
    ignoreExternalFocusing?: boolean;
    isBlocking?: boolean;
    isFooterAtBottom?: boolean;
    isHiddenOnDismiss?: boolean;
    isLightDismiss?: boolean;
    isOpen?: boolean;
    layerProps?: ILayerProps;
    onDismiss?: (ev?: React.SyntheticEvent<HTMLElement>) => void;
    onDismissed?: () => void;
    onLightDismissClick?: () => void;
    onOuterClick?: () => void;
    onRenderBody?: IRenderFunction<IPanelProps>;
    onRenderFooter?: IRenderFunction<IPanelProps>;
    onRenderFooterContent?: IRenderFunction<IPanelProps>;
    onRenderHeader?: IPanelHeaderRenderer;
    onRenderNavigation?: IRenderFunction<IPanelProps>;
    styles?: IStyleFunctionOrObject<IPanelStyleProps, IPanelStyles>;
    theme?: ITheme;
    type?: PanelType;
}

// @public (undocumented)
interface IPanelStyleProps {
    className?: string;
    focusTrapZoneClassName?: string;
    hasCloseButton?: boolean;
    headerClassName?: string;
    isAnimating?: boolean;
    isFooterAtBottom?: boolean;
    isFooterSticky?: boolean;
    isHiddenOnDismiss?: boolean;
    isOnRightSide?: boolean;
    isOpen?: boolean;
    theme: ITheme;
    type?: PanelType;
}

// @public (undocumented)
interface IPanelStyles {
    closeButton: IStyle;
    commands: IStyle;
    content: IStyle;
    contentInner: IStyle;
    footer: IStyle;
    footerInner: IStyle;
    header: IStyle;
    headerText: IStyle;
    hiddenPanel: IStyle;
    main: IStyle;
    navigation: IStyle;
    overlay: IStyle;
    root: IStyle;
    scrollableContent: IStyle;
}

// @public (undocumented)
interface IPeopleFloatingPickerProps extends IBaseFloatingPickerProps<IPersonaProps> {
}

// @public (undocumented)
interface IPeoplePickerItemProps extends IPickerItemProps<IExtendedPersonaProps> {
}

// @public
interface IPeoplePickerItemSelectedProps extends IPickerItemProps<IPersonaProps & {
    // (undocumented)
    ValidationState: ValidationState;
}>, IPeoplePickerItemSharedProps {
    styles?: IStyleFunctionOrObject<IPeoplePickerItemSelectedStyleProps, IPeoplePickerItemSelectedStyles>;
}

// @public
declare type IPeoplePickerItemSelectedStyleProps = Required<Pick<IPeoplePickerItemSelectedProps, 'theme'>> & Pick<IPeoplePickerItemSelectedProps, 'className' | 'selected' | 'disabled'> & {
    invalid?: boolean;
};

// @public
interface IPeoplePickerItemSelectedStyles {
    itemContent: IStyle;
    removeButton: IStyle;
    root: IStyle;
    subComponentStyles: IPeoplePickerItemSelectedSubComponentStyles;
}

// @public
interface IPeoplePickerItemSelectedSubComponentStyles {
    persona: IStyleFunctionOrObject<IPersonaStyleProps, any>;
    personaCoin: IStyleFunctionOrObject<IPersonaCoinStyleProps, any>;
}

// @public
interface IPeoplePickerItemSharedProps {
    className?: string;
    theme?: ITheme;
}

// @public (undocumented)
interface IPeoplePickerItemState {
    // (undocumented)
    contextualMenuVisible: boolean;
}

// @public
interface IPeoplePickerItemSuggestionProps extends IPeoplePickerItemSharedProps {
    compact?: boolean;
    personaProps?: IPersonaProps;
    styles?: IStyleFunctionOrObject<IPeoplePickerItemSuggestionStyleProps, IPeoplePickerItemSuggestionStyles>;
    suggestionsProps?: IBasePickerSuggestionsProps;
}

// @public
declare type IPeoplePickerItemSuggestionStyleProps = Required<Pick<IPeoplePickerItemSuggestionProps, 'theme'>> & Pick<IPeoplePickerItemSuggestionProps, 'className'> & {};

// @public
interface IPeoplePickerItemSuggestionStyles {
    personaWrapper: IStyle;
    root: IStyle;
}

// @public @deprecated
interface IPeoplePickerItemWithMenuProps extends IPickerItemProps<IPersonaWithMenu> {
}

// @public
interface IPeoplePickerProps extends IBasePickerProps<IPersonaProps> {
}

// @public (undocumented)
interface IPersona {
}

// @public (undocumented)
interface IPersonaCoinProps extends IPersonaSharedProps {
    className?: string;
    componentRef?: IRefObject<{}>;
    styles?: IStyleFunctionOrObject<IPersonaCoinStyleProps, IPersonaCoinStyles>;
}

// @public (undocumented)
interface IPersonaCoinStyleProps {
    className?: string;
    coinSize?: number;
    showUnknownPersonaCoin?: boolean;
    size?: PersonaSize;
    theme: ITheme;
}

// @public (undocumented)
interface IPersonaCoinStyles {
    // (undocumented)
    coin: IStyle;
    // (undocumented)
    image: IStyle;
    // (undocumented)
    imageArea: IStyle;
    // (undocumented)
    initials: IStyle;
    // (undocumented)
    size10WithoutPresenceIcon: IStyle;
}

// @public (undocumented)
interface IPersonaPresenceProps extends IPersonaSharedProps {
    componentRef?: IRefObject<{}>;
    styles?: IStyleFunctionOrObject<IPersonaPresenceStyleProps, IPersonaPresenceStyles>;
}

// @public (undocumented)
interface IPersonaPresenceStyleProps {
    className?: string;
    presence?: PersonaPresence;
    size?: PersonaSize;
    theme: ITheme;
}

// @public (undocumented)
interface IPersonaPresenceStyles {
    // (undocumented)
    presence: IStyle;
    // (undocumented)
    presenceIcon: IStyle;
}

// @public (undocumented)
interface IPersonaProps extends IPersonaSharedProps {
    className?: string;
    componentRef?: IRefObject<IPersona>;
    onRenderOptionalText?: IRenderFunction<IPersonaProps>;
    onRenderPrimaryText?: IRenderFunction<IPersonaProps>;
    onRenderSecondaryText?: IRenderFunction<IPersonaProps>;
    onRenderTertiaryText?: IRenderFunction<IPersonaProps>;
    styles?: IStyleFunctionOrObject<IPersonaStyleProps, IPersonaStyles>;
}

// @public (undocumented)
interface IPersonaSharedProps extends React.HTMLAttributes<PersonaBase | PersonaCoinBase | HTMLDivElement> {
    allowPhoneInitials?: boolean;
    coinProps?: IPersonaCoinProps;
    coinSize?: number;
    hidePersonaDetails?: boolean;
    imageAlt?: string;
    imageInitials?: string;
    imageShouldFadeIn?: boolean;
    imageShouldStartVisible?: boolean;
    imageUrl?: string;
    initialsColor?: PersonaInitialsColor | string;
    onPhotoLoadingStateChange?: (newImageLoadState: ImageLoadState) => void;
    onRenderCoin?: IRenderFunction<IPersonaSharedProps>;
    onRenderInitials?: IRenderFunction<IPersonaSharedProps>;
    optionalText?: string;
    presence?: PersonaPresence;
    // @deprecated
    primaryText?: string;
    secondaryText?: string;
    showInitialsUntilImageLoads?: boolean;
    // (undocumented)
    showSecondaryText?: boolean;
    showUnknownPersonaCoin?: boolean;
    size?: PersonaSize;
    tertiaryText?: string;
    text?: string;
    theme?: ITheme;
}

// @public (undocumented)
interface IPersonaState {
    // (undocumented)
    isImageError?: boolean;
    // (undocumented)
    isImageLoaded?: boolean;
}

// @public (undocumented)
interface IPersonaStyleProps {
    className?: string;
    coinSize?: number;
    presence?: PersonaPresence;
    // (undocumented)
    showSecondaryText?: boolean;
    size?: PersonaSize;
    theme: ITheme;
}

// @public (undocumented)
interface IPersonaStyles {
    // (undocumented)
    details: IStyle;
    // (undocumented)
    optionalText: IStyle;
    // (undocumented)
    primaryText: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    secondaryText: IStyle;
    // (undocumented)
    tertiaryText: IStyle;
    // (undocumented)
    textContent: IStyle;
}

// @public @deprecated
interface IPersonaWithMenu extends IPersonaProps {
    menuItems?: IContextualMenuItem[];
}

// @public
declare type IPickerAriaIds = {
    selectedSuggestionAlert: string;
    selectedItems: string;
    suggestionList: string;
};

// @public
interface IPickerItem {
}

// @public
interface IPickerItemProps<T> extends React.AllHTMLAttributes<HTMLElement> {
    componentRef?: IRefObject<IPickerItem>;
    index: number;
    item: T;
    key?: string | number;
    onItemChange?: (item: T, index: number) => void;
    onRemoveItem?: () => void;
    removeButtonAriaLabel?: string;
    selected?: boolean;
}

// @public (undocumented)
interface IPivot {
    focus(): void;
}

// @public (undocumented)
interface IPivotItemProps extends React.HTMLAttributes<HTMLDivElement> {
    ariaLabel?: string;
    componentRef?: IRefObject<{}>;
    headerButtonProps?: {
        // (undocumented)
        [key: string]: string | number | boolean;
    };
    headerText?: string;
    itemCount?: number;
    itemIcon?: string;
    itemKey?: string;
    keytipProps?: IKeytipProps;
    // @deprecated
    linkText?: string;
    onRenderItemLink?: IRenderFunction<IPivotItemProps>;
}

// @public (undocumented)
interface IPivotProps extends React.ClassAttributes<PivotBase>, React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    componentRef?: IRefObject<IPivot>;
    getTabId?: (itemKey: string, index: number) => string;
    headersOnly?: boolean;
    initialSelectedIndex?: number;
    initialSelectedKey?: string;
    linkFormat?: PivotLinkFormat;
    linkSize?: PivotLinkSize;
    onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => void;
    selectedKey?: string;
    styles?: IStyleFunctionOrObject<IPivotStyleProps, IPivotStyles>;
    theme?: ITheme;
}

// @public
interface IPivotState {
    // (undocumented)
    links: IPivotItemProps[];
    // (undocumented)
    selectedKey: string;
    // (undocumented)
    selectedTabId: string;
}

// @public (undocumented)
declare type IPivotStyleProps = Required<Pick<IPivotProps, 'theme'>> & Pick<IPivotProps, 'className'> & {
    rootIsLarge?: boolean;
    rootIsTabs?: boolean;
    // @deprecated
    linkIsSelected?: boolean;
};

// @public (undocumented)
interface IPivotStyles {
    // (undocumented)
    count: IStyle;
    // (undocumented)
    icon: IStyle;
    // (undocumented)
    link: IStyle;
    // (undocumented)
    linkContent: IStyle;
    // (undocumented)
    linkIsSelected: IStyle;
    root: IStyle;
    // (undocumented)
    text: IStyle;
}

// @public (undocumented)
interface IPlainCard {
}

// @public
interface IPlainCardProps extends IBaseCardProps<IPlainCard, IPlainCardStyles, IPlainCardStyleProps> {
    onRenderPlainCard?: IRenderFunction<any>;
}

// @public (undocumented)
interface IPlainCardStyleProps extends IBaseCardStyleProps {
}

// @public (undocumented)
interface IPlainCardStyles extends IBaseCardStyles {
}

// @public (undocumented)
interface IPopup {
}

// @public (undocumented)
interface IPopupProps extends React.HTMLAttributes<Popup> {
    ariaDescribedBy?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    className?: string;
    componentRef?: IRefObject<IPopup>;
    onDismiss?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => any;
    role?: string;
    shouldRestoreFocus?: boolean;
}

// @public (undocumented)
interface IPopupState {
    // (undocumented)
    needsVerticalScrollBar?: boolean;
}

// @public (undocumented)
interface IPositioningContainer {
}

// @public (undocumented)
interface IPositioningContainerProps extends IBaseProps<IPositioningContainer> {
    ariaDescribedBy?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    backgroundColor?: string;
    bounds?: IRectangle;
    className?: string;
    componentRef?: IRefObject<IPositioningContainer>;
    coverTarget?: boolean;
    directionalHint?: DirectionalHint;
    directionalHintFixed?: boolean;
    directionalHintForRTL?: DirectionalHint;
    doNotLayer?: boolean;
    finalHeight?: number;
    minPagePadding?: number;
    offsetFromTarget?: number;
    onDismiss?: (ev?: any) => void;
    onLayerMounted?: () => void;
    onPositioned?: (positions?: IPositionedData) => void;
    positioningContainerMaxHeight?: number;
    positioningContainerWidth?: number;
    preventDismissOnScroll?: boolean;
    role?: string;
    setInitialFocus?: boolean;
    target?: HTMLElement | string | MouseEvent | IPoint | null;
    // @deprecated
    targetPoint?: IPoint;
    // @deprecated
    useTargetPoint?: boolean;
}

// @public (undocumented)
interface IPositioningContainerState {
    heightOffset?: number;
    positions?: IPositionedData;
}

// @public @deprecated (undocumented)
declare type IPositioningContainerTypes = IPositioningContainerProps;

// @public (undocumented)
interface IProgressIndicator {
    // (undocumented)
    focus: () => void;
}

// @public (undocumented)
interface IProgressIndicatorProps extends React.ClassAttributes<ProgressIndicatorBase> {
    ariaValueText?: string;
    barHeight?: number;
    className?: string;
    componentRef?: IRefObject<IProgressIndicator>;
    description?: React.ReactNode;
    label?: React.ReactNode;
    onRenderProgress?: IRenderFunction<IProgressIndicatorProps>;
    percentComplete?: number;
    progressHidden?: boolean;
    styles?: IStyleFunctionOrObject<IProgressIndicatorStyleProps, IProgressIndicatorStyles>;
    theme?: ITheme;
    // @deprecated
    title?: string;
}

// @public (undocumented)
interface IProgressIndicatorStyleProps {
    // (undocumented)
    barHeight?: number;
    className?: string;
    // (undocumented)
    indeterminate?: boolean;
    theme: ITheme;
}

// @public (undocumented)
interface IProgressIndicatorStyles {
    // (undocumented)
    itemDescription: IStyle;
    // (undocumented)
    itemName: IStyle;
    // (undocumented)
    itemProgress: IStyle;
    // (undocumented)
    progressBar: IStyle;
    // (undocumented)
    progressTrack: IStyle;
    root: IStyle;
}

// @public (undocumented)
interface IRating {
}

// @public
interface IRatingProps extends React.AllHTMLAttributes<HTMLElement> {
    allowZeroStars?: boolean;
    ariaLabelFormat?: string;
    // @deprecated
    ariaLabelId?: string;
    componentRef?: IRefObject<IRating>;
    // (undocumented)
    getAriaLabel?: (rating: number, max: number) => string;
    icon?: string;
    max?: number;
    // @deprecated
    min?: number;
    onChange?: (event: React.FocusEvent<HTMLElement>, rating?: number) => void;
    // @deprecated (undocumented)
    onChanged?: (rating: number) => void;
    rating?: number;
    readOnly?: boolean;
    size?: RatingSize;
    styles?: IStyleFunctionOrObject<IRatingStyleProps, IRatingStyles>;
    theme?: ITheme;
    unselectedIcon?: string;
}

// @public (undocumented)
interface IRatingState {
    // (undocumented)
    rating: number | null | undefined;
}

// @public (undocumented)
interface IRatingStyleProps {
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    readOnly?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IRatingStyles {
    // (undocumented)
    labelText: IStyle;
    // (undocumented)
    ratingButton: IStyle;
    // (undocumented)
    ratingFocusZone: IStyle;
    // (undocumented)
    ratingStar: IStyle;
    // (undocumented)
    ratingStarBack: IStyle;
    // (undocumented)
    ratingStarFront: IStyle;
    // (undocumented)
    ratingStarIsLarge: IStyle;
    // (undocumented)
    ratingStarIsSmall: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    rootIsLarge: IStyle;
    // (undocumented)
    rootIsSmall: IStyle;
}

// @public (undocumented)
interface IResizeGroup {
    remeasure(): void;
}

// @public (undocumented)
interface IResizeGroupProps extends React.HTMLAttributes<ResizeGroupBase | HTMLElement> {
    className?: string;
    componentRef?: IRefObject<IResizeGroup>;
    data: any;
    dataDidRender?: (renderedData: any) => void;
    onGrowData?: (prevData: any) => any;
    onReduceData: (prevData: any) => any;
    onRenderData: (data: any) => JSX.Element;
    // @deprecated
    styles?: IStyleFunctionOrObject<IResizeGroupStyleProps, IResizeGroupStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IResizeGroupState {
    dataToMeasure?: any;
    measureContainer?: boolean;
    renderedData?: any;
    resizeDirection?: 'grow' | 'shrink';
}

// @public (undocumented)
interface IResizeGroupStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface IResizeGroupStyles {
    root: IStyle;
}

// @public (undocumented)
interface IRGB {
    // (undocumented)
    a?: number;
    // (undocumented)
    b: number;
    // (undocumented)
    g: number;
    // (undocumented)
    r: number;
}

// @public (undocumented)
interface IScrollablePane {
    forceLayoutUpdate(): void;
    getScrollPosition(): number;
}

// @public (undocumented)
interface IScrollablePaneContext {
    // (undocumented)
    scrollablePane?: {
        // (undocumented)
        subscribe: (handler: (container: HTMLElement, stickyContainer: HTMLElement) => void) => void;
        // (undocumented)
        unsubscribe: (handler: (container: HTMLElement, stickyContainer: HTMLElement) => void) => void;
        // (undocumented)
        addSticky: (sticky: Sticky) => void;
        // (undocumented)
        removeSticky: (sticky: Sticky) => void;
        // (undocumented)
        updateStickyRefHeights: () => void;
        // (undocumented)
        sortSticky: (sticky: Sticky, sortAgain?: boolean) => void;
        // (undocumented)
        notifySubscribers: (sort?: boolean) => void;
        // (undocumented)
        syncScrollSticky: (sticky: Sticky) => void;
    };
}

// @public (undocumented)
interface IScrollablePaneProps extends React.HTMLAttributes<HTMLElement | ScrollablePaneBase> {
    className?: string;
    componentRef?: IRefObject<IScrollablePane>;
    initialScrollPosition?: number;
    // (undocumented)
    scrollbarVisibility?: ScrollbarVisibility;
    styles?: IStyleFunctionOrObject<IScrollablePaneStyleProps, IScrollablePaneStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IScrollablePaneState {
    // (undocumented)
    scrollbarHeight: number | undefined;
    // (undocumented)
    scrollbarWidth: number | undefined;
    // (undocumented)
    stickyBottomHeight: number;
    // (undocumented)
    stickyTopHeight: number;
}

// @public (undocumented)
interface IScrollablePaneStyleProps {
    className?: string;
    // (undocumented)
    scrollbarVisibility?: IScrollablePaneProps['scrollbarVisibility'];
    theme: ITheme;
}

// @public (undocumented)
interface IScrollablePaneStyles {
    contentContainer: IStyle;
    root: IStyle;
    stickyAbove: IStyle;
    stickyBelow: IStyle;
    stickyBelowItems: IStyle;
}

// @public (undocumented)
declare function isDark(color: IColor): boolean;

// @public (undocumented)
interface ISearchBox {
    focus(): void;
    hasFocus(): boolean;
}

// @public (undocumented)
interface ISearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ariaLabel?: string;
    className?: string;
    clearButtonProps?: IButtonProps;
    componentRef?: IRefObject<ISearchBox>;
    // @deprecated
    defaultValue?: string;
    disableAnimation?: boolean;
    iconProps?: Pick<IIconProps, Exclude<keyof IIconProps, 'className'>>;
    // @deprecated
    labelText?: string;
    onChange?: (newValue: any) => void;
    // @deprecated
    onChanged?: (newValue: any) => void;
    onClear?: (ev?: any) => void;
    onEscape?: (ev?: any) => void;
    onSearch?: (newValue: any) => void;
    placeholder?: string;
    styles?: IStyleFunctionOrObject<ISearchBoxStyleProps, ISearchBoxStyles>;
    theme?: ITheme;
    underlined?: boolean;
    value?: string;
}

// @public (undocumented)
interface ISearchBoxState {
    // (undocumented)
    hasFocus?: boolean;
    // (undocumented)
    id?: string;
    // (undocumented)
    value?: string;
}

// @public (undocumented)
interface ISearchBoxStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    disableAnimation?: boolean;
    // (undocumented)
    disabled?: boolean;
    // (undocumented)
    hasFocus?: boolean;
    // (undocumented)
    hasInput?: boolean;
    // (undocumented)
    theme: ITheme;
    // (undocumented)
    underlined?: boolean;
}

// @public (undocumented)
interface ISearchBoxStyles {
    // (undocumented)
    clearButton?: IStyle;
    // (undocumented)
    field?: IStyle;
    // (undocumented)
    icon?: IStyle;
    // (undocumented)
    iconContainer?: IStyle;
    // (undocumented)
    root?: IStyle;
}

// @public
interface ISelectableDroppableTextProps<TComponent, TListenerElement = TComponent> extends React.HTMLAttributes<TListenerElement> {
    ariaLabel?: string;
    calloutProps?: ICalloutProps;
    className?: string;
    componentRef?: IRefObject<TComponent>;
    defaultSelectedKey?: string | number | string[] | number[];
    disabled?: boolean;
    errorMessage?: string;
    id?: string;
    label?: string;
    onRenderContainer?: IRenderFunction<ISelectableDroppableTextProps<TComponent>>;
    onRenderItem?: IRenderFunction<ISelectableOption>;
    onRenderList?: IRenderFunction<ISelectableDroppableTextProps<TComponent>>;
    onRenderOption?: IRenderFunction<ISelectableOption>;
    options?: any;
    panelProps?: IPanelProps;
    placeholder?: string;
    required?: boolean;
    selectedKey?: string | number | string[] | number[];
}

// @public (undocumented)
interface ISelectableOption {
    ariaLabel?: string;
    data?: any;
    disabled?: boolean;
    index?: number;
    itemType?: SelectableOptionMenuItemType;
    key: string | number;
    selected?: boolean;
    text: string;
    title?: string;
}

// @public (undocumented)
interface ISelectedItemProps<T> extends IPickerItemProps<T> {
    // (undocumented)
    onCopyItem: (item: T) => void;
}

// @public (undocumented)
interface ISelectedPeopleItemProps extends ISelectedItemProps<IExtendedPersonaProps> {
    // (undocumented)
    onExpandItem?: () => void;
    // (undocumented)
    renderPersonaCoin?: IRenderFunction<IPersonaProps>;
    // (undocumented)
    renderPrimaryText?: IRenderFunction<IPersonaProps>;
}

// @public (undocumented)
interface ISelectedPeopleProps extends IBaseSelectedItemsListProps<IExtendedPersonaProps> {
    // (undocumented)
    copyMenuItemText?: string;
    // (undocumented)
    editMenuItemText?: string;
    // (undocumented)
    floatingPickerProps?: IBaseFloatingPickerProps<IPersonaProps>;
    // (undocumented)
    getEditingItemText?: (item: IExtendedPersonaProps) => string;
    // (undocumented)
    onExpandGroup?: (item: IExtendedPersonaProps) => void;
    // (undocumented)
    onRenderFloatingPicker?: (props: IBaseFloatingPickerProps<IPersonaProps>) => JSX.Element;
    // (undocumented)
    removeMenuItemText?: string;
}

// @public (undocumented)
interface ISelection {
    // (undocumented)
    canSelectItem: (item: IObjectWithKey, index?: number) => boolean;
    // (undocumented)
    count: number;
    // (undocumented)
    getItems(): IObjectWithKey[];
    // (undocumented)
    getSelectedCount(): number;
    // (undocumented)
    getSelectedIndices(): number[];
    // (undocumented)
    getSelection(): IObjectWithKey[];
    // (undocumented)
    isAllSelected(): boolean;
    // (undocumented)
    isIndexSelected(index: number): boolean;
    // (undocumented)
    isKeySelected(key: string): boolean;
    // (undocumented)
    isModal?(): boolean;
    // (undocumented)
    isRangeSelected(fromIndex: number, count: number): boolean;
    // (undocumented)
    mode: SelectionMode;
    // (undocumented)
    selectToIndex(index: number, clearSelection?: boolean): void;
    // (undocumented)
    selectToKey(key: string, clearSelection?: boolean): void;
    // (undocumented)
    setAllSelected(isAllSelected: boolean): void;
    // (undocumented)
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): void;
    // (undocumented)
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): void;
    // (undocumented)
    setItems(items: IObjectWithKey[], shouldClear: boolean): void;
    // (undocumented)
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): void;
    // (undocumented)
    setModal?(isModal: boolean): void;
    // (undocumented)
    toggleAllSelected(): void;
    // (undocumented)
    toggleIndexSelected(index: number): void;
    // (undocumented)
    toggleKeySelected(key: string): void;
    // (undocumented)
    toggleRangeSelected(fromIndex: number, count: number): void;
}

// @public (undocumented)
interface ISelectionOptions {
    // (undocumented)
    canSelectItem?: (item: IObjectWithKey, index?: number) => boolean;
    // (undocumented)
    getKey?: (item: IObjectWithKey, index?: number) => string | number;
    // (undocumented)
    onSelectionChanged?: () => void;
    // (undocumented)
    selectionMode?: SelectionMode;
}

// @public (undocumented)
interface ISelectionZone {
    // (undocumented)
    ignoreNextFocus: () => void;
}

// @public (undocumented)
interface ISelectionZoneProps extends React.ClassAttributes<SelectionZone> {
    // (undocumented)
    componentRef?: () => void;
    // (undocumented)
    disableAutoSelectOnInputElements?: boolean;
    // (undocumented)
    enterModalOnTouch?: boolean;
    // (undocumented)
    isSelectedOnFocus?: boolean;
    // @deprecated (undocumented)
    layout?: {};
    // (undocumented)
    onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean;
    // (undocumented)
    onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void;
    // (undocumented)
    selection: ISelection;
    // (undocumented)
    selectionMode?: SelectionMode;
    // (undocumented)
    selectionPreservedOnEmptyClick?: boolean;
}

// @public (undocumented)
interface IShimmer {
}

// @public (undocumented)
interface IShimmerCircle {
}

// @public
interface IShimmerCircleProps extends React.AllHTMLAttributes<HTMLElement> {
    // @deprecated
    borderStyle?: IRawStyle;
    componentRef?: IRefObject<IShimmerCircle>;
    height?: number;
    styles?: IStyleFunctionOrObject<IShimmerCircleStyleProps, IShimmerCircleStyles>;
    theme?: ITheme;
}

// @public
declare type IShimmerCircleStyleProps = {
    theme: ITheme;
    height?: number;
    // @deprecated
    borderStyle?: IRawStyle;
};

// @public
interface IShimmerCircleStyles {
    root?: IStyle;
    svg?: IStyle;
}

// @public
interface IShimmerElement {
    height?: number;
    type: ShimmerElementType;
    verticalAlign?: 'top' | 'center' | 'bottom';
    width?: number | string;
}

// @public (undocumented)
interface IShimmerElementsGroup {
}

// @public
interface IShimmerElementsGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    componentRef?: IRefObject<IShimmerElementsGroup>;
    flexWrap?: boolean;
    rowHeight?: number;
    shimmerElements?: IShimmerElement[];
    styles?: IStyleFunctionOrObject<IShimmerElementsGroupStyleProps, IShimmerElementsGroupStyles>;
    theme?: ITheme;
    width?: string;
}

// @public (undocumented)
interface IShimmerElementsGroupStyleProps {
    // (undocumented)
    flexWrap?: boolean;
    // (undocumented)
    theme: ITheme;
}

// @public (undocumented)
interface IShimmerElementsGroupStyles {
    // (undocumented)
    root?: IStyle;
}

// @public (undocumented)
interface IShimmerGap {
}

// @public
interface IShimmerGapProps extends React.AllHTMLAttributes<HTMLElement> {
    // @deprecated
    borderStyle?: IRawStyle;
    componentRef?: IRefObject<IShimmerGap>;
    height?: number;
    styles?: IStyleFunctionOrObject<IShimmerGapStyleProps, IShimmerGapStyles>;
    theme?: ITheme;
    width?: number | string;
}

// @public
declare type IShimmerGapStyleProps = {
    theme: ITheme;
    height?: number;
    // @deprecated
    borderStyle?: IRawStyle;
};

// @public
interface IShimmerGapStyles {
    root?: IStyle;
}

// @public (undocumented)
interface IShimmerLine {
}

// @public
interface IShimmerLineProps extends React.AllHTMLAttributes<HTMLElement> {
    // @deprecated
    borderStyle?: IRawStyle;
    componentRef?: IRefObject<IShimmerLine>;
    height?: number;
    styles?: IStyleFunctionOrObject<IShimmerLineStyleProps, IShimmerLineStyles>;
    theme?: ITheme;
    width?: number | string;
}

// @public
declare type IShimmerLineStyleProps = {
    theme: ITheme;
    height?: number;
    // @deprecated
    borderStyle?: IRawStyle;
};

// @public
interface IShimmerLineStyles {
    bottomLeftCorner?: IStyle;
    bottomRightCorner?: IStyle;
    root?: IStyle;
    topLeftCorner?: IStyle;
    topRightCorner?: IStyle;
}

// @public
interface IShimmerProps extends React.AllHTMLAttributes<HTMLElement> {
    ariaLabel?: string;
    className?: string;
    componentRef?: IRefObject<IShimmer>;
    customElementsGroup?: React.ReactNode;
    isDataLoaded?: boolean;
    shimmerElements?: IShimmerElement[];
    styles?: IStyleFunctionOrObject<IShimmerStyleProps, IShimmerStyles>;
    theme?: ITheme;
    width?: number | string;
}

// @public (undocumented)
interface IShimmerState {
    contentLoaded?: boolean;
}

// @public (undocumented)
interface IShimmerStyleProps {
    // (undocumented)
    className?: string;
    // (undocumented)
    isDataLoaded?: boolean;
    // (undocumented)
    theme: ITheme;
    // (undocumented)
    transitionAnimationInterval?: number;
}

// @public (undocumented)
interface IShimmerStyles {
    // (undocumented)
    dataWrapper?: IStyle;
    // (undocumented)
    root?: IStyle;
    // (undocumented)
    screenReaderText?: IStyle;
    // (undocumented)
    shimmerWrapper?: IStyle;
}

// @public (undocumented)
interface ISlider {
    // (undocumented)
    focus: () => void;
    // (undocumented)
    value: number | undefined;
}

// @public (undocumented)
interface ISliderProps extends React.ClassAttributes<SliderBase> {
    ariaLabel?: string;
    ariaValueText?: (value: number) => string;
    buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
    className?: string;
    componentRef?: IRefObject<ISlider>;
    defaultValue?: number;
    disabled?: boolean;
    label?: string;
    max?: number;
    min?: number;
    onChange?: (value: number) => void;
    onChanged?: (event: MouseEvent | TouchEvent, value: number) => void;
    showValue?: boolean;
    step?: number;
    styles?: IStyleFunctionOrObject<ISliderStyleProps, ISliderStyles>;
    theme?: ITheme;
    value?: number;
    valueFormat?: (value: number) => string;
    vertical?: boolean;
}

// @public (undocumented)
interface ISliderState {
    // (undocumented)
    renderedValue?: number;
    // (undocumented)
    value?: number;
}

// @public (undocumented)
declare type ISliderStyleProps = Required<Pick<ISliderProps, 'theme'>> & Pick<ISliderProps, 'className' | 'disabled' | 'vertical'> & {
    // (undocumented)
    showTransitions?: boolean;
    // (undocumented)
    showValue?: boolean;
    // (undocumented)
    titleLabelClassName?: string;
};

// @public (undocumented)
interface ISliderStyles {
    // (undocumented)
    activeSection: IStyle;
    // (undocumented)
    container: IStyle;
    // (undocumented)
    inactiveSection: IStyle;
    // (undocumented)
    line: IStyle;
    // (undocumented)
    lineContainer: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    slideBox: IStyle;
    // (undocumented)
    thumb: IStyle;
    // (undocumented)
    titleLabel: IStyle;
    // (undocumented)
    valueLabel: IStyle;
}

// @public (undocumented)
interface ISpinButton {
    focus: () => void;
    value?: string;
}

// @public (undocumented)
interface ISpinButtonProps {
    ariaLabel?: string;
    ariaPositionInSet?: number;
    ariaSetSize?: number;
    ariaValueNow?: number;
    // (undocumented)
    ariaValueText?: string;
    className?: string;
    componentRef?: (component?: ISpinButton | null) => void;
    decrementButtonAriaLabel?: string;
    decrementButtonIcon?: IIconProps;
    defaultValue?: string;
    disabled?: boolean;
    downArrowButtonStyles?: Partial<IButtonStyles>;
    getClassNames?: (theme: ITheme, disabled: boolean, isFocused: boolean, keyboardSpinDirection: KeyboardSpinDirection, labelPosition?: Position, className?: string) => ISpinButtonClassNames;
    iconProps?: IIconProps;
    incrementButtonAriaLabel?: string;
    incrementButtonIcon?: IIconProps;
    keytipProps?: IKeytipProps;
    label: string;
    // (undocumented)
    labelPosition?: Position;
    max?: number;
    min?: number;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onDecrement?: (value: string) => string | void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onIncrement?: (value: string) => string | void;
    onValidate?: (value: string, event?: React.SyntheticEvent<HTMLElement>) => string | void;
    precision?: number;
    step?: number;
    styles?: Partial<ISpinButtonStyles>;
    theme?: ITheme;
    title?: string;
    upArrowButtonStyles?: Partial<IButtonStyles>;
    value?: string;
}

// @public (undocumented)
interface ISpinButtonState {
    isFocused: boolean;
    keyboardSpinDirection: KeyboardSpinDirection;
    precision: number;
    value: string;
}

// @public (undocumented)
interface ISpinButtonStyles {
    arrowButtonsContainer: IStyle;
    arrowButtonsContainerDisabled: IStyle;
    icon: IStyle;
    iconDisabled: IStyle;
    input: IStyle;
    inputDisabled: IStyle;
    inputTextSelected: IStyle;
    label: IStyle;
    labelDisabled: IStyle;
    labelWrapper: IStyle;
    labelWrapperBottom: IStyle;
    labelWrapperEnd: IStyle;
    labelWrapperStart: IStyle;
    labelWrapperTop: IStyle;
    root: IStyle;
    spinButtonWrapper: IStyle;
    spinButtonWrapperDisabled: IStyle;
    spinButtonWrapperFocused: IStyle;
    spinButtonWrapperHovered: IStyle;
    spinButtonWrapperTopBottom: IStyle;
}

// @public (undocumented)
interface ISpinner {
}

// @public
interface ISpinnerProps extends React.HTMLAttributes<HTMLElement> {
    ariaLabel?: string;
    ariaLive?: 'assertive' | 'polite' | 'off';
    className?: string;
    componentRef?: IRefObject<ISpinner>;
    label?: string;
    labelPosition?: SpinnerLabelPosition;
    size?: SpinnerSize;
    styles?: IStyleFunctionOrObject<ISpinnerStyleProps, ISpinnerStyles>;
    theme?: ITheme;
    // @deprecated
    type?: SpinnerType;
}

// @public
interface ISpinnerStyleProps {
    className?: string;
    labelPosition?: SpinnerLabelPosition;
    size?: SpinnerSize;
    theme: ITheme;
}

// @public
interface ISpinnerStyles {
    circle?: IStyle;
    label?: IStyle;
    root?: IStyle;
    screenReaderText?: IStyle;
}

// @public (undocumented)
declare function isRelativeUrl(url: string): boolean;

// @public (undocumented)
interface IStickyContext {
    // (undocumented)
    scrollablePane: PropTypes.Requireable<object>;
}

// @public (undocumented)
interface IStickyProps extends React.Props<Sticky> {
    componentRef?: IRefObject<IStickyProps>;
    isScrollSynced?: boolean;
    stickyBackgroundColor?: string;
    stickyClassName?: string;
    stickyPosition?: StickyPositionType;
}

// @public (undocumented)
interface IStickyState {
    // (undocumented)
    isStickyBottom: boolean;
    // (undocumented)
    isStickyTop: boolean;
}

// @public
interface ISuggestionItemProps<T> {
    className?: string;
    componentRef?: IRefObject<ISuggestionsItem>;
    id?: string;
    isSelectedOverride?: boolean;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onRemoveItem: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    removeButtonAriaLabel?: string;
    RenderSuggestion: (item: T, suggestionItemProps?: ISuggestionItemProps<T>) => JSX.Element;
    showRemoveButton?: boolean;
    styles?: IStyleFunctionOrObject<ISuggestionsItemStyleProps, ISuggestionsItemStyles>;
    suggestionModel: ISuggestionModel<T>;
    theme?: ITheme;
}

// @public
interface ISuggestionModel<T> {
    ariaLabel?: string;
    item: T;
    selected: boolean;
}

// @public
interface ISuggestions<T> {
    executeSelectedAction: () => void;
    focusAboveSuggestions: () => void;
    focusBelowSuggestions: () => void;
    focusSearchForMoreButton: () => void;
    hasSuggestedAction: () => boolean;
    hasSuggestedActionSelected: () => boolean;
    tryHandleKeyDown: (keyCode: number, currentSuggestionIndex: number) => boolean;
}

// @public (undocumented)
interface ISuggestionsControlProps<T> extends React.ClassAttributes<any>, ISuggestionsCoreProps<T> {
    className?: string;
    completeSuggestion: () => void;
    footerItemsProps?: ISuggestionsHeaderFooterProps[];
    headerItemsProps?: ISuggestionsHeaderFooterProps[];
    shouldSelectFirstItem?: () => boolean;
    suggestionsFooterContainerAriaLabel?: string;
    suggestionsHeaderContainerAriaLabel?: string;
}

// @public (undocumented)
interface ISuggestionsControlState<T> {
    // (undocumented)
    selectedFooterIndex: number;
    // (undocumented)
    selectedHeaderIndex: number;
    // (undocumented)
    suggestions: ISuggestionModel<T>[];
}

// @public (undocumented)
interface ISuggestionsCoreProps<T> extends React.ClassAttributes<any> {
    componentRef?: IRefObject<{}>;
    onRenderSuggestion?: (props: T, suggestionItemProps: T) => JSX.Element;
    onSuggestionClick: (ev?: React.MouseEvent<HTMLElement>, item?: any, index?: number) => void;
    onSuggestionRemove?: (ev?: React.MouseEvent<HTMLElement>, item?: IPersonaProps, index?: number) => void;
    resultsMaximumNumber?: number;
    shouldLoopSelection: boolean;
    showRemoveButtons?: boolean;
    suggestions: ISuggestionModel<T>[];
    suggestionsAvailableAlertText?: string;
    suggestionsContainerAriaLabel?: string;
    suggestionsItemClassName?: string;
}

// @public (undocumented)
interface ISuggestionsHeaderFooterItemProps {
    // (undocumented)
    className: string | undefined;
    // (undocumented)
    componentRef?: IRefObject<{}>;
    // (undocumented)
    id: string;
    // (undocumented)
    isSelected: boolean;
    // (undocumented)
    onExecute?: () => void;
    // (undocumented)
    renderItem: () => JSX.Element;
}

// @public (undocumented)
interface ISuggestionsHeaderFooterProps {
    // (undocumented)
    ariaLabel?: string;
    // (undocumented)
    className?: string;
    // (undocumented)
    onExecute?: () => void;
    // (undocumented)
    renderItem: () => JSX.Element;
    // (undocumented)
    shouldShow: () => boolean;
}

// @public
interface ISuggestionsItem {
}

// @public
declare type ISuggestionsItemStyleProps = Required<Pick<ISuggestionItemProps<any>, 'theme'>> & Pick<ISuggestionItemProps<any>, 'className'> & {
    suggested?: boolean;
};

// @public
interface ISuggestionsItemStyles {
    closeButton: IStyle;
    itemButton: IStyle;
    root: IStyle;
}

// @public
interface ISuggestionsProps<T> extends React.Props<any> {
    className?: string;
    componentRef?: IRefObject<ISuggestions<T>>;
    createGenericItem?: () => void;
    forceResolveText?: string;
    isLoading?: boolean;
    isMostRecentlyUsedVisible?: boolean;
    isResultsFooterVisible?: boolean;
    isSearching?: boolean;
    loadingText?: string;
    moreSuggestionsAvailable?: boolean;
    mostRecentlyUsedHeaderText?: string;
    noResultsFoundText?: string;
    onGetMoreResults?: () => void;
    onRenderNoResultFound?: IRenderFunction<void>;
    onRenderSuggestion?: (props: T, suggestionItemProps: T) => JSX.Element;
    onSuggestionClick: (ev?: React.MouseEvent<HTMLElement>, item?: any, index?: number) => void;
    onSuggestionRemove?: (ev?: React.MouseEvent<HTMLElement>, item?: IPersonaProps, index?: number) => void;
    refocusSuggestions?: (keyCode: KeyCodes) => void;
    removeSuggestionAriaLabel?: string;
    resultsFooter?: (props: ISuggestionsProps<T>) => JSX.Element;
    resultsFooterFull?: (props: ISuggestionsProps<T>) => JSX.Element;
    resultsMaximumNumber?: number;
    searchErrorText?: string;
    searchForMoreText?: string;
    searchingText?: string;
    showForceResolve?: () => boolean;
    showRemoveButtons?: boolean;
    styles?: IStyleFunctionOrObject<{}, {}>;
    suggestions: ISuggestionModel<T>[];
    suggestionsAvailableAlertText?: string;
    suggestionsClassName?: string;
    suggestionsContainerAriaLabel?: string;
    suggestionsHeaderText?: string;
    suggestionsItemClassName?: string;
    suggestionsListId?: string;
    theme?: ITheme;
}

// @public (undocumented)
interface ISuggestionsState {
    // (undocumented)
    selectedActionType: SuggestionActionType;
}

// @public
declare type ISuggestionsStyleProps = Required<Pick<ISuggestionsProps<any>, 'theme'>> & Pick<ISuggestionsProps<any>, 'className' | 'suggestionsClassName'> & {
    forceResolveButtonSelected?: boolean;
    searchForMoreButtonSelected?: boolean;
};

// @public
interface ISuggestionsStyles {
    forceResolveButton: IStyle;
    noSuggestions: IStyle;
    root: IStyle;
    searchForMoreButton: IStyle;
    subComponentStyles: ISuggestionsSubComponentStyles;
    suggestionsAvailable: IStyle;
    suggestionsContainer: IStyle;
    title: IStyle;
}

// @public
interface ISuggestionsSubComponentStyles {
    spinner: IStyleFunctionOrObject<ISpinnerStyleProps, any>;
}

// @public
declare function isValidShade(shade?: Shade): boolean;

// @public (undocumented)
interface ISwatchColorPicker {
}

// @public (undocumented)
interface ISwatchColorPickerProps {
    cellBorderWidth?: number;
    cellHeight?: number;
    cellMargin?: number;
    cellShape?: 'circle' | 'square';
    cellWidth?: number;
    className?: string;
    colorCells: IColorCellProps[];
    columnCount: number;
    componentRef?: IRefObject<ISwatchColorPicker>;
    disabled?: boolean;
    doNotContainWithinFocusZone?: boolean;
    focusOnHover?: boolean;
    getColorGridCellStyles?: IStyleFunctionOrObject<IColorPickerGridCellStyleProps, IColorPickerGridCellStyles>;
    id?: string;
    mouseLeaveParentSelector?: string | undefined;
    onCellFocused?: (id?: string, color?: string) => void;
    onCellHovered?: (id?: string, color?: string) => void;
    onColorChanged?: (id?: string, color?: string) => void;
    positionInSet?: number;
    selectedId?: string;
    setSize?: number;
    shouldFocusCircularNavigate?: boolean;
    styles?: IStyleFunctionOrObject<ISwatchColorPickerStyleProps, ISwatchColorPickerStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface ISwatchColorPickerState {
    // (undocumented)
    selectedIndex?: number;
}

// @public
interface ISwatchColorPickerStyleProps {
    cellMargin?: number;
    className?: string;
    theme: ITheme;
}

// @public
interface ISwatchColorPickerStyles {
    focusedContainer?: IStyle;
    root: IStyle;
    tableCell: IStyle;
}

// @public
interface ITag {
    key: string;
    name: string;
}

// @public
interface ITagItemProps extends IPickerItemProps<ITag> {
    className?: string;
    enableTagFocusInDisabledPicker?: boolean;
    styles?: IStyleFunctionOrObject<ITagItemStyleProps, ITagItemStyles>;
    theme?: ITheme;
}

// @public
declare type ITagItemStyleProps = Required<Pick<ITagItemProps, 'theme'>> & Pick<ITagItemProps, 'className' | 'selected' | 'disabled'> & {};

// @public
interface ITagItemStyles {
    close: IStyle;
    root: IStyle;
    text: IStyle;
}

// @public
interface ITagItemSuggestionProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string;
    styles?: IStyleFunctionOrObject<ITagItemSuggestionStyleProps, ITagItemSuggestionStyles>;
    theme?: ITheme;
}

// @public
declare type ITagItemSuggestionStyleProps = Required<Pick<ITagItemSuggestionProps, 'theme'>> & Pick<ITagItemSuggestionProps, 'className'> & {};

// @public
interface ITagItemSuggestionStyles {
    suggestionTextOverflow?: IStyle;
}

// @public
interface ITagPickerProps extends IBasePickerProps<ITag> {
}

// @public (undocumented)
interface ITeachingBubble {
    focus(): void;
}

// @public
interface ITeachingBubbleProps extends React.ClassAttributes<TeachingBubbleBase | TeachingBubbleContentBase>, IAccessiblePopupProps {
    ariaDescribedBy?: string;
    ariaLabelledBy?: string;
    calloutProps?: ICalloutProps;
    componentRef?: IRefObject<ITeachingBubble>;
    hasCloseIcon?: boolean;
    hasCondensedHeadline?: boolean;
    hasSmallHeadline?: boolean;
    headline?: string;
    illustrationImage?: IImageProps;
    isWide?: boolean;
    onDismiss?: (ev?: any) => void;
    primaryButtonProps?: IButtonProps;
    secondaryButtonProps?: IButtonProps;
    styles?: IStyleFunctionOrObject<ITeachingBubbleStyleProps, ITeachingBubbleStyles>;
    targetElement?: HTMLElement;
    theme?: ITheme;
}

// @public (undocumented)
interface ITeachingBubbleState {
    // (undocumented)
    isTeachingBubbleVisible?: boolean;
}

// @public (undocumented)
declare type ITeachingBubbleStyleProps = Required<Pick<ITeachingBubbleProps, 'theme'>> & Pick<ITeachingBubbleProps, 'hasCondensedHeadline' | 'hasSmallHeadline' | 'isWide'> & {
    calloutClassName?: string;
    primaryButtonClassName?: string;
    secondaryButtonClassName?: string;
};

// @public (undocumented)
interface ITeachingBubbleStyles {
    // (undocumented)
    body: IStyle;
    // (undocumented)
    bodyContent: IStyle;
    // (undocumented)
    closeButton: IStyle;
    // (undocumented)
    content: IStyle;
    // (undocumented)
    footer: IStyle;
    // (undocumented)
    header: IStyle;
    // (undocumented)
    headline: IStyle;
    // (undocumented)
    imageContent: IStyle;
    // (undocumented)
    primaryButton: IStyle;
    // (undocumented)
    root: IStyle;
    // (undocumented)
    secondaryButton: IStyle;
    // (undocumented)
    subComponentStyles?: ITeachingBubbleSubComponentStyles;
    // (undocumented)
    subText: IStyle;
}

// @public (undocumented)
interface ITeachingBubbleSubComponentStyles {
    callout: IStyleFunctionOrObject<any, any>;
}

// @public (undocumented)
interface ITextField {
    blur: () => void;
    focus: () => void;
    select: () => void;
    selectionEnd: number | null;
    selectionStart: number | null;
    setSelectionEnd: (value: number) => void;
    setSelectionRange: (start: number, end: number) => void;
    setSelectionStart: (value: number) => void;
    value: string | undefined;
}

// @public
interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    // @deprecated (undocumented)
    addonString?: string;
    ariaLabel?: string;
    autoAdjustHeight?: boolean;
    autoComplete?: string;
    borderless?: boolean;
    className?: string;
    // @deprecated (undocumented)
    componentId?: string;
    componentRef?: IRefObject<ITextField>;
    defaultValue?: string;
    deferredValidationTime?: number;
    description?: string;
    disabled?: boolean;
    errorMessage?: string;
    // @deprecated (undocumented)
    iconClass?: string;
    iconProps?: IIconProps;
    inputClassName?: string;
    label?: string;
    mask?: string;
    maskChar?: string;
    maskFormat?: {
        // (undocumented)
        [key: string]: RegExp;
    };
    multiline?: boolean;
    onBeforeChange?: (newValue: any) => void;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void;
    // @deprecated (undocumented)
    onChanged?: (newValue: any) => void;
    onGetErrorMessage?: (value: string) => string | PromiseLike<string> | undefined;
    onNotifyValidationResult?: (errorMessage: string, value: string | undefined) => void;
    // @deprecated (undocumented)
    onRenderAddon?: IRenderFunction<ITextFieldProps>;
    onRenderDescription?: IRenderFunction<ITextFieldProps>;
    onRenderLabel?: IRenderFunction<ITextFieldProps>;
    onRenderPrefix?: IRenderFunction<ITextFieldProps>;
    onRenderSuffix?: IRenderFunction<ITextFieldProps>;
    prefix?: string;
    readOnly?: boolean;
    resizable?: boolean;
    styles?: IStyleFunctionOrObject<ITextFieldStyleProps, ITextFieldStyles>;
    suffix?: string;
    theme?: ITheme;
    underlined?: boolean;
    validateOnFocusIn?: boolean;
    validateOnFocusOut?: boolean;
    validateOnLoad?: boolean;
    value?: string;
}

// @public (undocumented)
interface ITextFieldState {
    errorMessage: string;
    isFocused: boolean;
    // (undocumented)
    value: string;
}

// @public (undocumented)
declare type ITextFieldStyleProps = Required<Pick<ITextFieldProps, 'theme'>> & Pick<ITextFieldProps, 'className' | 'disabled' | 'inputClassName' | 'required' | 'multiline' | 'borderless' | 'resizable' | 'underlined' | 'iconClass' | 'autoAdjustHeight'> & {
    hasErrorMessage?: boolean;
    hasIcon?: boolean;
    hasLabel?: boolean;
    focused?: boolean;
};

// @public (undocumented)
interface ITextFieldStyles extends IStyleSet<ITextFieldStyles> {
    description: IStyle;
    errorMessage: IStyle;
    field: IStyle;
    fieldGroup: IStyle;
    icon: IStyle;
    prefix: IStyle;
    root: IStyle;
    subComponentStyles: ITextFieldSubComponentStyles;
    suffix: IStyle;
    wrapper: IStyle;
}

// @public (undocumented)
interface ITextFieldSubComponentStyles {
    label: IStyleFunctionOrObject<any, any>;
}

// @public (undocumented)
interface IThemeRules {
    // (undocumented)
    [key: string]: IThemeSlotRule;
}

// @public (undocumented)
interface IThemeSlotRule {
    // (undocumented)
    asShade?: Shade;
    // (undocumented)
    color?: IColor;
    // (undocumented)
    dependentRules: IThemeSlotRule[];
    // (undocumented)
    inherits?: IThemeSlotRule;
    // (undocumented)
    isBackgroundShade?: boolean;
    // (undocumented)
    isCustomized?: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    value?: string;
}

// @public (undocumented)
interface IToggle {
    // (undocumented)
    focus: () => void;
}

// @public
interface IToggleProps extends React.HTMLAttributes<HTMLElement> {
    ariaLabel?: string;
    as?: IComponentAs<React.HTMLAttributes<HTMLElement>>;
    checked?: boolean;
    componentRef?: IRefObject<IToggle>;
    defaultChecked?: boolean;
    disabled?: boolean;
    inlineLabel?: boolean;
    keytipProps?: IKeytipProps;
    label?: string;
    // @deprecated (undocumented)
    offAriaLabel?: string;
    offText?: string;
    // @deprecated (undocumented)
    onAriaLabel?: string;
    onChange?: (event: React.MouseEvent<HTMLElement>, checked?: boolean) => void;
    // @deprecated (undocumented)
    onChanged?: (checked: boolean) => void;
    onText?: string;
    styles?: IStyleFunctionOrObject<IToggleStyleProps, IToggleStyles>;
    theme?: ITheme;
}

// @public (undocumented)
interface IToggleState {
    // (undocumented)
    checked: boolean;
}

// @public
interface IToggleStyleProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    inlineLabel?: boolean;
    onOffMissing?: boolean;
    theme: ITheme;
}

// @public
interface IToggleStyles {
    container: IStyle;
    label: IStyle;
    pill: IStyle;
    root: IStyle;
    text: IStyle;
    thumb: IStyle;
}

// @public (undocumented)
interface ITooltip {
}

// @public (undocumented)
interface ITooltipHost {
    dismiss: () => void;
    show: () => void;
}

// @public
interface ITooltipHostProps extends React.HTMLAttributes<HTMLDivElement | TooltipHostBase> {
    calloutProps?: ICalloutProps;
    closeDelay?: number;
    componentRef?: IRefObject<ITooltipHost>;
    content?: string;
    delay?: TooltipDelay;
    directionalHint?: DirectionalHint;
    directionalHintForRTL?: DirectionalHint;
    hostClassName?: string;
    onTooltipToggle?(isTooltipVisible: boolean): void;
    overflowMode?: TooltipOverflowMode;
    setAriaDescribedBy?: boolean;
    styles?: IStyleFunctionOrObject<ITooltipHostStyleProps, ITooltipHostStyles>;
    theme?: ITheme;
    tooltipProps?: ITooltipProps;
}

// @public (undocumented)
interface ITooltipHostState {
    // (undocumented)
    isTooltipVisible: boolean;
}

// @public (undocumented)
interface ITooltipHostStyleProps {
    className?: string;
    theme: ITheme;
}

// @public (undocumented)
interface ITooltipHostStyles {
    root: IStyle;
}

// @public
interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement | TooltipBase> {
    calloutProps?: ICalloutProps;
    componentRef?: IRefObject<ITooltip>;
    content?: string;
    delay?: TooltipDelay;
    directionalHint?: DirectionalHint;
    directionalHintForRTL?: DirectionalHint;
    maxWidth?: string | null;
    onRenderContent?: IRenderFunction<ITooltipProps>;
    styles?: IStyleFunctionOrObject<ITooltipStyleProps, ITooltipStyles>;
    targetElement?: HTMLElement;
    theme?: ITheme;
}

// @public (undocumented)
interface ITooltipStyleProps {
    className?: string;
    delay?: TooltipDelay;
    maxWidth?: string;
    theme: ITheme;
}

// @public (undocumented)
interface ITooltipStyles {
    content: IStyle;
    root: IStyle;
    subText: IStyle;
}

// @public (undocumented)
interface IVerticalDividerClassNames {
    // (undocumented)
    divider: string;
    // (undocumented)
    wrapper: string;
}

// @public (undocumented)
interface IVerticalDividerProps {
    getClassNames?: (theme: ITheme) => IVerticalDividerClassNames;
}

// @public (undocumented)
declare enum KeyboardSpinDirection {
    // (undocumented)
    down = -1,
    // (undocumented)
    notSpinning = 0,
    // (undocumented)
    up = 1,
}

// @public
declare class Keytip extends BaseComponent<IKeytipProps, {}> implements IKeytip {
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare class KeytipData extends BaseComponent<IKeytipDataProps & IRenderComponent<{}>, {}> {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare const KeytipLayer: (props: IKeytipLayerProps) => JSX.Element;

// @public
declare class KeytipLayerBase extends BaseComponent<IKeytipLayerProps, IKeytipLayerState> {
    // (undocumented)
    constructor(props: IKeytipLayerProps, context: any);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: IKeytipLayerProps;
    // (undocumented)
    getCurrentSequence(): string;
    // (undocumented)
    getKeytipTree(): KeytipTree;
    processInput(key: string, ev?: React.KeyboardEvent<HTMLElement>): void;
    processTransitionInput(transitionKey: IKeytipTransitionKey, ev?: React.KeyboardEvent<HTMLElement>): void;
    // (undocumented)
    render(): JSX.Element;
    showKeytips(ids: string[]): void;
    }

// @public (undocumented)
declare const Label: (props: ILabelProps) => JSX.Element;

// @public (undocumented)
declare class LabelBase extends BaseComponent<ILabelProps, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const Layer: (props: ILayerProps) => JSX.Element;

// @public (undocumented)
declare class LayerBase extends BaseComponent<ILayerProps, ILayerBaseState> {
    // (undocumented)
    constructor(props: ILayerProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    componentWillUpdate(): void;
    // (undocumented)
    static defaultProps: ILayerProps;
    // (undocumented)
    render(): React.ReactNode;
    }

// @public (undocumented)
declare class LayerHost extends BaseComponent<ILayerHostProps> {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    shouldComponentUpdate(): boolean;
}

// @public (undocumented)
declare const Link: React.StatelessComponent<ILinkProps>;

// @public (undocumented)
declare class LinkBase extends BaseComponent<ILinkProps, any> implements ILink {
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare class List extends BaseComponent<IListProps, IListState> implements IList {
    // (undocumented)
    constructor(props: IListProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IListProps): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        startIndex: number;
        // (undocumented)
        onRenderCell: (item: any, index: number, containsFocus: boolean) => JSX.Element;
        // (undocumented)
        renderedWindowsAhead: number;
        // (undocumented)
        renderedWindowsBehind: number;
    };
    // (undocumented)
    forceUpdate(): void;
    // (undocumented)
    getStartItemIndexInView(measureItem?: (itemIndex: number) => number): number;
    // (undocumented)
    refs: {
        // (undocumented)
        [key: string]: React.ReactInstance;
    };
    // (undocumented)
    render(): JSX.Element;
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    // (undocumented)
    shouldComponentUpdate(newProps: IListProps, newState: IListState): boolean;
    }

// @public (undocumented)
declare const ListPeoplePicker: (props: IPeoplePickerProps) => JSX.Element;

// @public
declare class ListPeoplePickerBase extends MemberListPeoplePicker {
    static defaultProps: {
        // (undocumented)
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        // (undocumented)
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps | undefined) => JSX.Element;
        // (undocumented)
        createGenericItem: typeof createGenericItem;
    };
}

// @public (undocumented)
declare const MarqueeSelection: (props: IMarqueeSelectionProps) => JSX.Element;

// @public (undocumented)
declare class MaskedTextField extends BaseComponent<ITextFieldProps, IMaskedTextFieldState> implements ITextField {
    // (undocumented)
    constructor(props: ITextFieldProps);
    // (undocumented)
    blur(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: ITextFieldProps): void;
    // (undocumented)
    static defaultProps: ITextFieldProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    select(): void;
    // (undocumented)
    readonly selectionEnd: number | null;
    // (undocumented)
    readonly selectionStart: number | null;
    // (undocumented)
    setSelectionEnd(value: number): void;
    // (undocumented)
    setSelectionRange(start: number, end: number): void;
    // (undocumented)
    setSelectionStart(value: number): void;
    // (undocumented)
    setValue(newValue: string): void;
    protected _skipComponentRefResolution: boolean;
    // (undocumented)
    readonly value: string | undefined;
}

// @public (undocumented)
declare const MAX_COLOR_HUE = 359;

// @public (undocumented)
declare const MAX_COLOR_RGBA = 255;

// @public (undocumented)
declare const MAX_COLOR_SATURATION = 100;

// @public (undocumented)
declare const MAX_COLOR_VALUE = 100;

// @public (undocumented)
declare class MemberListPeoplePicker extends BasePickerListBelow<IPersonaProps, IPeoplePickerProps> {
}

// @public (undocumented)
declare const MessageBar: (props: IMessageBarProps) => JSX.Element;

// @public (undocumented)
declare class MessageBarBase extends BaseComponent<IMessageBarProps, IMessageBarState> {
    // (undocumented)
    constructor(props: IMessageBarProps);
    // (undocumented)
    static defaultProps: IMessageBarProps;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare class MessageBarButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum MessageBarType {
    blocked = 2,
    error = 1,
    info = 0,
    // @deprecated
    remove = 90000,
    severeWarning = 3,
    success = 4,
    warning = 5,
}

// @public (undocumented)
declare const Modal: (props: IModalProps) => JSX.Element;

// @public (undocumented)
declare class ModalBase extends BaseComponent<IModalProps, IDialogState> implements IModal {
    // (undocumented)
    constructor(props: IModalProps);
    // (undocumented)
    componentDidUpdate(prevProps: IModalProps, prevState: IDialogState): void;
    // (undocumented)
    componentWillReceiveProps(newProps: IModalProps): void;
    // (undocumented)
    static defaultProps: IModalProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element | null;
    }

// @public (undocumented)
declare const mru: IExtendedPersonaProps[];

// @public (undocumented)
declare const Nav: (props: INavProps) => JSX.Element;

// @public (undocumented)
declare class NavBase extends BaseComponent<INavProps, INavState> implements INav {
    // (undocumented)
    constructor(props: INavProps);
    // (undocumented)
    componentWillReceiveProps(newProps: INavProps): void;
    // (undocumented)
    static defaultProps: INavProps;
    // (undocumented)
    render(): JSX.Element | null;
    // (undocumented)
    readonly selectedKey: string | undefined;
}

// @public (undocumented)
declare const NormalPeoplePicker: (props: IPeoplePickerProps) => JSX.Element;

// @public
declare class NormalPeoplePickerBase extends BasePeoplePicker {
    static defaultProps: {
        // (undocumented)
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        // (undocumented)
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps | undefined) => JSX.Element;
        // (undocumented)
        createGenericItem: typeof createGenericItem;
    };
}

// @public (undocumented)
declare type OnChangeCallback = (evt?: React.FormEvent<HTMLElement | HTMLInputElement>, props?: IChoiceGroupOption) => void;

// @public (undocumented)
declare type OnFocusCallback = (ev?: React.FocusEvent<HTMLElement | HTMLInputElement>, props?: IChoiceGroupOption) => void | undefined;

// @public (undocumented)
declare enum OpenCardMode {
    hotKey = 1,
    hover = 0,
}

// @public (undocumented)
declare enum OverflowButtonType {
    descriptive = 1,
    downArrow = 3,
    more = 2,
    none = 0,
}

// @public (undocumented)
declare const OverflowSet: (props: IOverflowSetProps) => JSX.Element;

// @public (undocumented)
declare class OverflowSetBase extends BaseComponent<IOverflowSetProps, {}> implements IOverflowSet {
    // (undocumented)
    constructor(props: IOverflowSetProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    componentWillUpdate(): void;
    // (undocumented)
    static defaultProps: Pick<IOverflowSetProps, 'vertical' | 'role'>;
    focus(forceIntoFirstElement?: boolean): boolean;
    focusElement(childElement?: HTMLElement): boolean;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare const Overlay: (props: IOverlayProps) => JSX.Element;

// @public (undocumented)
declare class OverlayBase extends BaseComponent<IOverlayProps, {}> {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare const Panel: (props: IPanelProps) => JSX.Element;

// @public (undocumented)
declare enum PanelType {
    custom = 7,
    extraLarge = 6,
    large = 4,
    largeFixed = 5,
    medium = 3,
    smallFixedFar = 1,
    smallFixedNear = 2,
    smallFluid = 0,
}

// @public (undocumented)
declare const people: (IExtendedPersonaProps & {
    // (undocumented)
    key: string | number;
})[];

// @public (undocumented)
declare const PeoplePickerItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;

// @public (undocumented)
declare const PeoplePickerItemBase: (props: IPeoplePickerItemSelectedProps) => JSX.Element;

// @public (undocumented)
declare const PeoplePickerItemSuggestion: (props: IPeoplePickerItemSuggestionProps) => JSX.Element;

// @public (undocumented)
declare const PeoplePickerItemSuggestionBase: (props: IPeoplePickerItemSuggestionProps) => JSX.Element;

// @public
declare const Persona: (props: IPersonaProps) => JSX.Element;

// @public
declare class PersonaBase extends BaseComponent<IPersonaProps, {}> {
    // (undocumented)
    constructor(props: IPersonaProps);
    // (undocumented)
    static defaultProps: IPersonaProps;
    // (undocumented)
    render(): JSX.Element;
    }

// @public
declare const PersonaCoin: (props: IPersonaCoinProps) => JSX.Element;

// @public
declare class PersonaCoinBase extends BaseComponent<IPersonaCoinProps, IPersonaState> {
    // (undocumented)
    constructor(props: IPersonaCoinProps);
    // (undocumented)
    componentWillReceiveProps(nextProps: IPersonaCoinProps): void;
    // (undocumented)
    static defaultProps: IPersonaCoinProps;
    // (undocumented)
    render(): JSX.Element | null;
}

// @public (undocumented)
declare enum PersonaInitialsColor {
    black = 11,
    // (undocumented)
    blue = 1,
    // (undocumented)
    darkBlue = 2,
    // (undocumented)
    darkGreen = 6,
    // (undocumented)
    darkRed = 14,
    // (undocumented)
    green = 5,
    // (undocumented)
    lightBlue = 0,
    // (undocumented)
    lightGreen = 4,
    // (undocumented)
    lightPink = 7,
    // (undocumented)
    magenta = 9,
    // (undocumented)
    orange = 12,
    // (undocumented)
    pink = 8,
    // (undocumented)
    purple = 10,
    red = 13,
    // (undocumented)
    teal = 3,
    transparent = 15,
    // (undocumented)
    violet = 16,
}

// @public (undocumented)
declare enum PersonaPresence {
    // (undocumented)
    away = 3,
    // (undocumented)
    blocked = 5,
    // (undocumented)
    busy = 6,
    // (undocumented)
    dnd = 4,
    // (undocumented)
    none = 0,
    // (undocumented)
    offline = 1,
    // (undocumented)
    online = 2,
}

// @public (undocumented)
declare namespace personaPresenceSize {
    const // (undocumented)
 size6 = "6px";
    const // (undocumented)
 size8 = "8px";
    const // (undocumented)
 size12 = "12px";
    const // (undocumented)
 size20 = "20px";
    const // (undocumented)
 size28 = "28px";
    const // (undocumented)
 border = "2px";
}

// @public (undocumented)
declare enum PersonaSize {
    // @deprecated
    extraExtraSmall = 1,
    // @deprecated
    extraLarge = 6,
    // @deprecated
    extraSmall = 2,
    // @deprecated
    large = 5,
    // @deprecated
    regular = 4,
    // (undocumented)
    size10 = 9,
    // (undocumented)
    size100 = 15,
    // (undocumented)
    size16 = 8,
    // (undocumented)
    size24 = 10,
    // (undocumented)
    size28 = 7,
    // (undocumented)
    size32 = 11,
    // (undocumented)
    size40 = 12,
    // (undocumented)
    size48 = 13,
    // (undocumented)
    size72 = 14,
    // @deprecated
    small = 3,
    // @deprecated
    tiny = 0,
}

// @public (undocumented)
declare namespace personaSize {
    const // (undocumented)
 size10 = "20px";
    const // (undocumented)
 size16 = "16px";
    const // (undocumented)
 size24 = "24px";
    const // (undocumented)
 size28 = "28px";
    const // (undocumented)
 size32 = "32px";
    const // (undocumented)
 size40 = "40px";
    const // (undocumented)
 size48 = "48px";
    const // (undocumented)
 size72 = "72px";
    const // (undocumented)
 size100 = "100px";
}

// @public
declare const Pivot: (props: IPivotProps) => JSX.Element;

// @public (undocumented)
declare class PivotBase extends BaseComponent<IPivotProps, IPivotState> {
    // (undocumented)
    constructor(props: IPivotProps);
    // (undocumented)
    componentWillReceiveProps(nextProps: IPivotProps): void;
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare class PivotItem extends BaseComponent<IPivotItemProps, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum PivotLinkFormat {
    links = 0,
    tabs = 1,
}

// @public (undocumented)
declare enum PivotLinkSize {
    large = 1,
    normal = 0,
}

// @public (undocumented)
declare const PlainCard: (props: IPlainCardProps) => JSX.Element;

// @public (undocumented)
declare class PlainCardBase extends BaseComponent<IPlainCardProps, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare class Popup extends BaseComponent<IPopupProps, IPopupState> {
    // (undocumented)
    constructor(props: IPopupProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: IPopupProps;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    _root: React.RefObject<HTMLDivElement>;
    }

// @public (undocumented)
declare class PositioningContainer extends BaseComponent<IPositioningContainerProps, IPositioningContainerState> implements PositioningContainer {
    // (undocumented)
    constructor(props: IPositioningContainerProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillMount(): void;
    // (undocumented)
    componentWillUpdate(newProps: IPositioningContainerProps): void;
    // (undocumented)
    static defaultProps: IPositioningContainerProps;
    // @deprecated
    dismiss: (ev?: Event | React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement> | undefined) => void;
    // (undocumented)
    protected _dismissOnLostFocus(ev: Event): void;
    // (undocumented)
    protected _dismissOnScroll(ev: Event): void;
    // (undocumented)
    protected _onComponentDidMount: () => void;
    // (undocumented)
    onResize: (ev?: Event | React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement> | undefined) => void;
    // (undocumented)
    render(): JSX.Element | null;
    // (undocumented)
    protected _setInitialFocus: () => void;
    }

// @public (undocumented)
declare const presenceBoolean: (presence: PersonaPresence) => {
    // (undocumented)
    isAvailable: boolean;
    // (undocumented)
    isAway: boolean;
    // (undocumented)
    isBlocked: boolean;
    // (undocumented)
    isBusy: boolean;
    // (undocumented)
    isDoNotDisturb: boolean;
    // (undocumented)
    isOffline: boolean;
};

// @public (undocumented)
declare class PrimaryButton extends BaseComponent<IButtonProps, {}> {
    // (undocumented)
    render(): JSX.Element;
    protected _skipComponentRefResolution: boolean;
}

// @public
declare const ProgressIndicator: (props: IProgressIndicatorProps) => JSX.Element;

// @public
declare class ProgressIndicatorBase extends BaseComponent<IProgressIndicatorProps, {}> {
    // (undocumented)
    constructor(props: IProgressIndicatorProps);
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        label: string;
        // (undocumented)
        description: string;
        // (undocumented)
        width: number;
    };
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const Rating: (props: IRatingProps) => JSX.Element;

// @public (undocumented)
declare class RatingBase extends BaseComponent<IRatingProps, IRatingState> {
    // (undocumented)
    constructor(props: IRatingProps);
    // (undocumented)
    componentWillReceiveProps(nextProps: IRatingProps): void;
    // (undocumented)
    static defaultProps: IRatingProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum RatingSize {
    // (undocumented)
    Large = 1,
    // (undocumented)
    Small = 0,
}

// @public (undocumented)
declare const ResizeGroup: typeof ResizeGroupBase;

// @public (undocumented)
declare class ResizeGroupBase extends BaseComponent<IResizeGroupProps, IResizeGroupState> {
    // (undocumented)
    constructor(props: IResizeGroupProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IResizeGroupProps): void;
    // (undocumented)
    componentWillReceiveProps(nextProps: IResizeGroupProps): void;
    // (undocumented)
    remeasure(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare function rgb2hex(r: number, g: number, b: number): string;

// @public (undocumented)
declare function rgb2hsv(r: number, g: number, b: number): IHSV;

// @public (undocumented)
declare const ScrollablePane: (props: IScrollablePaneProps) => JSX.Element;

// @public (undocumented)
declare class ScrollablePaneBase extends BaseComponent<IScrollablePaneProps, IScrollablePaneState> implements IScrollablePane {
    // (undocumented)
    constructor(props: IScrollablePaneProps);
    // (undocumented)
    addSticky: (sticky: Sticky) => void;
    // (undocumented)
    static childContextTypes: React.ValidationMap<IScrollablePaneContext>;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IScrollablePaneProps, prevState: IScrollablePaneState): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    readonly contentContainer: HTMLDivElement | null;
    // (undocumented)
    forceLayoutUpdate(): void;
    // (undocumented)
    getChildContext(): IScrollablePaneContext;
    // (undocumented)
    getScrollPosition: () => number;
    // (undocumented)
    notifySubscribers: () => void;
    // (undocumented)
    removeSticky: (sticky: Sticky) => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    readonly root: HTMLDivElement | null;
    // (undocumented)
    setStickiesDistanceFromTop(): void;
    // (undocumented)
    shouldComponentUpdate(nextProps: IScrollablePaneProps, nextState: IScrollablePaneState): boolean;
    // (undocumented)
    sortSticky: (sticky: Sticky, sortAgain?: boolean | undefined) => void;
    // (undocumented)
    readonly stickyAbove: HTMLDivElement | null;
    // (undocumented)
    readonly stickyBelow: HTMLDivElement | null;
    // (undocumented)
    subscribe: (handler: Function) => void;
    // (undocumented)
    syncScrollSticky: (sticky: Sticky) => void;
    // (undocumented)
    unsubscribe: (handler: Function) => void;
    // (undocumented)
    updateStickyRefHeights: () => void;
}

// @public (undocumented)
declare const ScrollbarVisibility: {
    // (undocumented)
    auto: "auto";
    // (undocumented)
    always: "always";
};

// @public (undocumented)
declare type ScrollbarVisibility = typeof ScrollbarVisibility[keyof typeof ScrollbarVisibility];

// @public (undocumented)
declare const ScrollToMode: {
    // (undocumented)
    auto: 0;
    // (undocumented)
    top: 1;
    // (undocumented)
    bottom: 2;
    // (undocumented)
    center: 3;
};

// @public (undocumented)
declare type ScrollToMode = typeof ScrollToMode[keyof typeof ScrollToMode];

// @public (undocumented)
declare const SearchBox: (props: ISearchBoxProps) => JSX.Element;

// @public (undocumented)
declare class SearchBoxBase extends BaseComponent<ISearchBoxProps, ISearchBoxState> {
    // (undocumented)
    constructor(props: ISearchBoxProps);
    // (undocumented)
    componentWillReceiveProps(newProps: ISearchBoxProps): void;
    // (undocumented)
    static defaultProps: Pick<ISearchBoxProps, 'disableAnimation' | 'clearButtonProps'>;
    focus(): void;
    hasFocus(): boolean;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum SelectableOptionMenuItemType {
    // (undocumented)
    Divider = 1,
    // (undocumented)
    Header = 2,
    // (undocumented)
    Normal = 0,
}

// @public
declare class SelectedPeopleList extends BasePeopleSelectedItemsList {
    // (undocumented)
    static defaultProps: any;
    // (undocumented)
    protected renderItems: () => JSX.Element[];
    // (undocumented)
    replaceItem: (itemToReplace: IExtendedPersonaProps, itemsToReplaceWith: IExtendedPersonaProps[]) => void;
}

// @public (undocumented)
declare class Selection implements ISelection {
    // (undocumented)
    constructor(options?: ISelectionOptions);
    // (undocumented)
    canSelectItem(item: IObjectWithKey, index?: number): boolean;
    // (undocumented)
    count: number;
    // (undocumented)
    getItems(): IObjectWithKey[];
    // (undocumented)
    getKey(item: IObjectWithKey, index?: number): string;
    // (undocumented)
    getSelectedCount(): number;
    // (undocumented)
    getSelectedIndices(): number[];
    // (undocumented)
    getSelection(): IObjectWithKey[];
    // (undocumented)
    isAllSelected(): boolean;
    // (undocumented)
    isIndexSelected(index: number): boolean;
    // (undocumented)
    isKeySelected(key: string): boolean;
    // (undocumented)
    isModal(): boolean;
    // (undocumented)
    isRangeSelected(fromIndex: number, count: number): boolean;
    // (undocumented)
    readonly mode: SelectionMode;
    // (undocumented)
    selectToIndex(index: number, clearSelection?: boolean): void;
    // (undocumented)
    selectToKey(key: string, clearSelection?: boolean): void;
    // (undocumented)
    setAllSelected(isAllSelected: boolean): void;
    // (undocumented)
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): void;
    // (undocumented)
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): void;
    setItems(items: IObjectWithKey[], shouldClear?: boolean): void;
    // (undocumented)
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): void;
    // (undocumented)
    setModal(isModal: boolean): void;
    // (undocumented)
    toggleAllSelected(): void;
    // (undocumented)
    toggleIndexSelected(index: number): void;
    // (undocumented)
    toggleKeySelected(key: string): void;
    // (undocumented)
    toggleRangeSelected(fromIndex: number, count: number): void;
    }

// @public (undocumented)
declare const SELECTION_CHANGE = "change";

// @public (undocumented)
declare enum SelectionDirection {
    // (undocumented)
    horizontal = 0,
    // (undocumented)
    vertical = 1,
}

// @public (undocumented)
declare enum SelectionMode {
    // (undocumented)
    multiple = 2,
    // (undocumented)
    none = 0,
    // (undocumented)
    single = 1,
}

// @public (undocumented)
declare class SelectionZone extends BaseComponent<ISelectionZoneProps, {}> {
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        isMultiSelectEnabled: boolean;
        // (undocumented)
        isSelectedOnFocus: boolean;
        // (undocumented)
        selectionMode: SelectionMode;
    };
    ignoreNextFocus: () => void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum SemanticColorSlots {
    // (undocumented)
    bodyBackground = 0,
    // (undocumented)
    bodyText = 1,
    // (undocumented)
    disabledBackground = 2,
    // (undocumented)
    disabledText = 3,
}

// @public
declare enum Shade {
    // (undocumented)
    Shade1 = 1,
    // (undocumented)
    Shade2 = 2,
    // (undocumented)
    Shade3 = 3,
    // (undocumented)
    Shade4 = 4,
    // (undocumented)
    Shade5 = 5,
    // (undocumented)
    Shade6 = 6,
    // (undocumented)
    Shade7 = 7,
    // (undocumented)
    Shade8 = 8,
    // (undocumented)
    Unshaded = 0,
}

// @public (undocumented)
declare const Shimmer: (props: IShimmerProps) => JSX.Element;

// @public (undocumented)
declare class ShimmerBase extends BaseComponent<IShimmerProps, IShimmerState> {
    // (undocumented)
    constructor(props: IShimmerProps);
    // (undocumented)
    componentWillReceiveProps(nextProps: IShimmerProps): void;
    // (undocumented)
    static defaultProps: IShimmerProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const ShimmerCircle: (props: IShimmerCircleProps) => JSX.Element;

// @public (undocumented)
declare class ShimmerCircleBase extends BaseComponent<IShimmerCircleProps, {}> {
    // (undocumented)
    constructor(props: IShimmerCircleProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const ShimmeredDetailsList: (props: IShimmeredDetailsListProps) => JSX.Element;

// @public (undocumented)
declare class ShimmeredDetailsListBase extends BaseComponent<IShimmeredDetailsListProps, {}> {
    // (undocumented)
    constructor(props: IShimmeredDetailsListProps);
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare enum ShimmerElementsDefaultHeights {
    circle = 24,
    gap = 16,
    line = 16,
}

// @public (undocumented)
declare const ShimmerElementsGroup: (props: IShimmerElementsGroupProps) => JSX.Element;

// @public (undocumented)
declare class ShimmerElementsGroupBase extends BaseComponent<IShimmerElementsGroupProps, {}> {
    // (undocumented)
    constructor(props: IShimmerElementsGroupProps);
    // (undocumented)
    static defaultProps: IShimmerElementsGroupProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum ShimmerElementType {
    circle = 2,
    gap = 3,
    line = 1,
}

// @public (undocumented)
declare const ShimmerGap: (props: IShimmerGapProps) => JSX.Element;

// @public (undocumented)
declare class ShimmerGapBase extends BaseComponent<IShimmerGapProps, {}> {
    // (undocumented)
    constructor(props: IShimmerGapProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const ShimmerLine: (props: IShimmerLineProps) => JSX.Element;

// @public (undocumented)
declare class ShimmerLineBase extends BaseComponent<IShimmerLineProps, {}> {
    // (undocumented)
    constructor(props: IShimmerLineProps);
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare const sizeBoolean: (size: PersonaSize) => {
    // (undocumented)
    isSize10: boolean;
    // (undocumented)
    isSize16: boolean;
    // (undocumented)
    isSize24: boolean;
    // (undocumented)
    isSize28: boolean;
    // (undocumented)
    isSize32: boolean;
    // (undocumented)
    isSize40: boolean;
    // (undocumented)
    isSize48: boolean;
    // (undocumented)
    isSize72: boolean;
    // (undocumented)
    isSize100: boolean;
};

// @public (undocumented)
declare const sizeToPixels: {
    // (undocumented)
    [key: number]: number;
};

// @public (undocumented)
declare const Slider: (props: ISliderProps) => JSX.Element;

// @public (undocumented)
declare class SliderBase extends BaseComponent<ISliderProps, ISliderState> implements ISlider {
    // (undocumented)
    constructor(props: ISliderProps);
    componentWillReceiveProps(newProps: ISliderProps): void;
    // (undocumented)
    static defaultProps: ISliderProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): React.ReactElement<{}>;
    // (undocumented)
    readonly value: number | undefined;
}

// @public (undocumented)
declare class SpinButton extends BaseComponent<ISpinButtonProps, ISpinButtonState> implements ISpinButton {
    // (undocumented)
    constructor(props: ISpinButtonProps);
    componentWillReceiveProps(newProps: ISpinButtonProps): void;
    // (undocumented)
    static defaultProps: ISpinButtonProps;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    readonly value: string | undefined;
    }

// @public (undocumented)
declare const Spinner: (props: ISpinnerProps) => JSX.Element;

// @public (undocumented)
declare class SpinnerBase extends BaseComponent<ISpinnerProps, any> {
    // (undocumented)
    static defaultProps: ISpinnerProps;
    // (undocumented)
    render(): JSX.Element;
}

// @public
declare type SpinnerLabelPosition = 'top' | 'right' | 'bottom' | 'left';

// @public
declare enum SpinnerSize {
    large = 3,
    medium = 2,
    small = 1,
    xSmall = 0,
}

// @public @deprecated
declare enum SpinnerType {
    // @deprecated
    large = 1,
    // @deprecated
    normal = 0,
}

// @public (undocumented)
declare class Sticky extends BaseComponent<IStickyProps, IStickyState> {
    // (undocumented)
    constructor(props: IStickyProps);
    // (undocumented)
    addSticky(stickyContent: HTMLDivElement): void;
    // (undocumented)
    readonly canStickyBottom: boolean;
    // (undocumented)
    readonly canStickyTop: boolean;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(prevProps: IStickyProps, prevState: IStickyState): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    context: IScrollablePaneContext;
    // (undocumented)
    static contextTypes: IStickyContext;
    // (undocumented)
    static defaultProps: IStickyProps;
    // (undocumented)
    distanceFromTop: number;
    // (undocumented)
    readonly nonStickyContent: HTMLDivElement | null;
    // (undocumented)
    readonly placeholder: HTMLDivElement | null;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    resetSticky(): void;
    // (undocumented)
    readonly root: HTMLDivElement | null;
    // (undocumented)
    setDistanceFromTop(container: HTMLDivElement): void;
    // (undocumented)
    shouldComponentUpdate(nextProps: IStickyProps, nextState: IStickyState): boolean;
    // (undocumented)
    readonly stickyContentBottom: HTMLDivElement | null;
    // (undocumented)
    readonly stickyContentTop: HTMLDivElement | null;
    // (undocumented)
    syncScroll: (container: HTMLElement) => void;
}

// @public (undocumented)
declare enum StickyPositionType {
    // (undocumented)
    Both = 0,
    // (undocumented)
    Footer = 2,
    // (undocumented)
    Header = 1,
}

// @public
declare enum SuggestionActionType {
    forceResolve = 1,
    none = 0,
    searchMore = 2,
}

// @public (undocumented)
declare enum SuggestionItemType {
    // (undocumented)
    footer = 2,
    // (undocumented)
    header = 0,
    // (undocumented)
    suggestion = 1,
}

// @public (undocumented)
declare class Suggestions<T> extends BaseComponent<ISuggestionsProps<T>, ISuggestionsState> {
    // (undocumented)
    constructor(suggestionsProps: ISuggestionsProps<T>);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    executeSelectedAction(): void;
    // (undocumented)
    focusAboveSuggestions(): void;
    // (undocumented)
    focusBelowSuggestions(): void;
    // (undocumented)
    focusSearchForMoreButton(): void;
    // (undocumented)
    protected _forceResolveButton: React.RefObject<IButton>;
    // (undocumented)
    hasSuggestedAction(): boolean;
    // (undocumented)
    hasSuggestedActionSelected(): boolean;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    scrollSelected(): void;
    // (undocumented)
    protected _searchForMoreButton: React.RefObject<IButton>;
    // (undocumented)
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    tryHandleKeyDown: (keyCode: number, currentSuggestionIndex: number) => boolean;
}

// @public
declare class SuggestionsControl<T> extends BaseComponent<ISuggestionsControlProps<T>, ISuggestionsControlState<T>> {
    // (undocumented)
    constructor(suggestionsProps: ISuggestionsControlProps<T>);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: ISuggestionsControlProps<T>): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    readonly currentSuggestion: ISuggestionModel<T>;
    // (undocumented)
    readonly currentSuggestionIndex: number;
    // (undocumented)
    executeSelectedAction(): void;
    // (undocumented)
    protected _forceResolveButton: IButton;
    handleKeyDown(keyCode: number): boolean;
    // (undocumented)
    hasSelection(): boolean;
    // (undocumented)
    hasSuggestionSelected(): boolean;
    // (undocumented)
    removeSuggestion(index?: number): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    protected renderFooterItems(): JSX.Element | null;
    // (undocumented)
    protected renderHeaderItems(): JSX.Element | null;
    // (undocumented)
    protected _renderSuggestions(): JSX.Element;
    protected resetSelectedItem(): void;
    // (undocumented)
    scrollSelected(): void;
    // (undocumented)
    protected _searchForMoreButton: IButton;
    // (undocumented)
    readonly selectedElement: HTMLDivElement | undefined;
    // (undocumented)
    protected _selectedElement: HTMLDivElement;
    protected selectFirstItem(): void;
    protected selectLastItem(): void;
    protected selectNextItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    protected selectPreviousItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    // (undocumented)
    protected _suggestions: SuggestionsCore<T>;
    }

// @public (undocumented)
declare class SuggestionsController<T> {
    // (undocumented)
    constructor();
    // (undocumented)
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    // (undocumented)
    createGenericSuggestion(itemToConvert: ISuggestionModel<T> | T): void;
    // (undocumented)
    currentIndex: number;
    // (undocumented)
    currentSuggestion: ISuggestionModel<T> | undefined;
    // (undocumented)
    deselectAllSuggestions(): void;
    // (undocumented)
    getCurrentItem(): ISuggestionModel<T>;
    // (undocumented)
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    // (undocumented)
    getSuggestions(): ISuggestionModel<T>[];
    // (undocumented)
    hasSelectedSuggestion(): boolean;
    nextSuggestion(): boolean;
    previousSuggestion(): boolean;
    // (undocumented)
    removeSuggestion(index: number): void;
    // (undocumented)
    setSelectedSuggestion(index: number): void;
    // (undocumented)
    suggestions: ISuggestionModel<T>[];
    // (undocumented)
    updateSuggestions(newSuggestions: T[], selectedIndex?: number): void;
}

// @public
declare class SuggestionsCore<T> extends BaseComponent<ISuggestionsCoreProps<T>, {}> {
    // (undocumented)
    constructor(suggestionsProps: ISuggestionsCoreProps<T>);
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    currentIndex: number;
    // (undocumented)
    currentSuggestion: ISuggestionModel<T> | undefined;
    // (undocumented)
    deselectAllSuggestions(): void;
    // (undocumented)
    getCurrentItem(): ISuggestionModel<T>;
    // (undocumented)
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    // (undocumented)
    hasSuggestionSelected(): boolean;
    nextSuggestion(): boolean;
    previousSuggestion(): boolean;
    // (undocumented)
    removeSuggestion(index: number): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    scrollSelected(): void;
    // (undocumented)
    readonly selectedElement: HTMLDivElement | undefined;
    // (undocumented)
    protected _selectedElement: HTMLDivElement;
    // (undocumented)
    setSelectedSuggestion(index: number): void;
    }

// @public (undocumented)
declare class SuggestionsHeaderFooterItem extends BaseComponent<ISuggestionsHeaderFooterItemProps, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class SuggestionsItem<T> extends BaseComponent<ISuggestionItemProps<T>, {}> {
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare class SuggestionsStore<T> {
    // (undocumented)
    constructor();
    // (undocumented)
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    // (undocumented)
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    // (undocumented)
    getSuggestions(): ISuggestionModel<T>[];
    // (undocumented)
    removeSuggestion(index: number): void;
    // (undocumented)
    suggestions: ISuggestionModel<T>[];
    // (undocumented)
    updateSuggestions(newSuggestions: T[]): void;
}

// @public (undocumented)
declare const SwatchColorPicker: (props: ISwatchColorPickerProps) => JSX.Element;

// @public (undocumented)
declare class SwatchColorPickerBase extends BaseComponent<ISwatchColorPickerProps, ISwatchColorPickerState> implements ISwatchColorPicker {
    // (undocumented)
    constructor(props: ISwatchColorPickerProps);
    // (undocumented)
    componentWillReceiveProps(newProps: ISwatchColorPickerProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: ISwatchColorPickerProps;
    // (undocumented)
    render(): JSX.Element | null;
    }

// @public (undocumented)
declare const TagItem: (props: ITagItemProps) => JSX.Element;

// @public (undocumented)
declare const TagItemBase: (props: ITagItemProps) => JSX.Element;

// @public (undocumented)
declare const TagItemSuggestion: (props: ITagItemSuggestionProps) => JSX.Element;

// @public (undocumented)
declare const TagItemSuggestionBase: (props: ITagItemSuggestionProps) => JSX.Element;

// @public (undocumented)
declare const TagPicker: (props: ITagPickerProps) => JSX.Element;

// @public (undocumented)
declare class TagPickerBase extends BasePicker<ITag, ITagPickerProps> {
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        onRenderItem: (props: ITagItemProps) => JSX.Element;
        // (undocumented)
        onRenderSuggestionsItem: (props: ITag) => JSX.Element;
    };
}

// @public (undocumented)
declare const TeachingBubble: (props: ITeachingBubbleProps) => JSX.Element;

// @public (undocumented)
declare class TeachingBubbleBase extends BaseComponent<ITeachingBubbleProps, ITeachingBubbleState> {
    // (undocumented)
    constructor(props: ITeachingBubbleProps);
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        calloutProps: {
            // (undocumented)
            beakWidth: number;
            // (undocumented)
            gapSpace: number;
            // (undocumented)
            setInitialFocus: boolean;
            // (undocumented)
            doNotLayer: boolean;
            // (undocumented)
            directionalHint: 12;
        };
    };
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    rootElement: React.RefObject<HTMLDivElement>;
}

// @public (undocumented)
declare const TeachingBubbleContent: (props: ITeachingBubbleProps) => JSX.Element;

// @public (undocumented)
declare class TeachingBubbleContentBase extends BaseComponent<ITeachingBubbleProps, ITeachingBubbleState> {
    // (undocumented)
    constructor(props: ITeachingBubbleProps);
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        hasCondensedHeadline: boolean;
        // (undocumented)
        imageProps: {
            // (undocumented)
            imageFit: ImageFit;
            // (undocumented)
            width: number;
            // (undocumented)
            height: number;
        };
    };
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    rootElement: React.RefObject<HTMLDivElement>;
}

// @public (undocumented)
declare const TextField: (props: ITextFieldProps) => JSX.Element;

// @public (undocumented)
declare class TextFieldBase extends BaseComponent<ITextFieldProps, ITextFieldState> implements ITextField {
    // (undocumented)
    constructor(props: ITextFieldProps);
    blur(): void;
    // (undocumented)
    componentDidMount(): void;
    // (undocumented)
    componentDidUpdate(): void;
    // (undocumented)
    componentWillReceiveProps(newProps: ITextFieldProps): void;
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: ITextFieldProps;
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    select(): void;
    readonly selectionEnd: number | null;
    readonly selectionStart: number | null;
    setSelectionEnd(value: number): void;
    setSelectionRange(start: number, end: number): void;
    setSelectionStart(value: number): void;
    readonly value: string | undefined;
}

// @public (undocumented)
declare class ThemeGenerator {
    // (undocumented)
    static getThemeAsCode(slotRules: IThemeRules): any;
    // (undocumented)
    static getThemeAsJson(slotRules: IThemeRules): any;
    // (undocumented)
    static getThemeAsSass(slotRules: IThemeRules): any;
    // (undocumented)
    static getThemeForPowerShell(slotRules: IThemeRules): any;
    // (undocumented)
    static insureSlots(slotRules: IThemeRules, isInverted: boolean): void;
    // (undocumented)
    static setSlot(rule: IThemeSlotRule, color: string | IColor, isInverted?: boolean, isCustomization?: boolean, overwriteCustomColor?: boolean): void;
    }

// @public (undocumented)
declare function themeRulesStandardCreator(): IThemeRules;

// @public (undocumented)
declare const Toggle: React.StatelessComponent<IToggleProps>;

// @public (undocumented)
declare class ToggleBase extends BaseComponent<IToggleProps, IToggleState> implements IToggle {
    // (undocumented)
    constructor(props: IToggleProps);
    readonly checked: boolean;
    // (undocumented)
    componentWillReceiveProps(newProps: IToggleProps): void;
    // (undocumented)
    focus(): void;
    // (undocumented)
    render(): JSX.Element;
    }

// @public (undocumented)
declare const Tooltip: (props: ITooltipProps) => JSX.Element;

// @public (undocumented)
declare class TooltipBase extends BaseComponent<ITooltipProps, any> {
    // (undocumented)
    static defaultProps: Partial<ITooltipProps>;
    // (undocumented)
    render(): JSX.Element;
}

// @public (undocumented)
declare enum TooltipDelay {
    // (undocumented)
    long = 2,
    // (undocumented)
    medium = 1,
    // (undocumented)
    zero = 0,
}

// @public (undocumented)
declare const TooltipHost: (props: ITooltipHostProps) => JSX.Element;

// @public (undocumented)
declare class TooltipHostBase extends BaseComponent<ITooltipHostProps, ITooltipHostState> implements ITooltipHost {
    // (undocumented)
    constructor(props: ITooltipHostProps);
    // (undocumented)
    componentWillUnmount(): void;
    // (undocumented)
    static defaultProps: {
        // (undocumented)
        delay: TooltipDelay;
    };
    // (undocumented)
    dismiss: () => void;
    // (undocumented)
    render(): JSX.Element;
    // (undocumented)
    show: () => void;
    }

// @public (undocumented)
declare enum TooltipOverflowMode {
    Parent = 0,
    Self = 1,
}

// @public (undocumented)
declare function updateA(color: IColor, a: number): IColor;

// @public (undocumented)
declare function updateH(color: IColor, h: number): IColor;

// @public (undocumented)
declare function updateSV(color: IColor, s: number, v: number): IColor;

// @public
declare enum ValidationState {
    invalid = 2,
    valid = 0,
    warning = 1,
}

// @public @deprecated (undocumented)
declare enum ValuePosition {
    // (undocumented)
    Next = 1,
    // (undocumented)
    Previous = 0,
}

// @public (undocumented)
declare const VerticalDivider: (props: IVerticalDividerProps) => JSX.Element;

// @public (undocumented)
declare class VirtualizedComboBox extends BaseComponent<IComboBoxProps, {}> implements IComboBox {
    // (undocumented)
    dismissMenu(): void;
    // (undocumented)
    focus(): boolean;
    // (undocumented)
    protected _onRenderList: (props: IComboBoxProps) => JSX.Element;
    // (undocumented)
    protected _onScrollToItem: (itemIndex: number) => void;
    // (undocumented)
    render(): JSX.Element;
}


export * from "@uifabric/icons";
export * from "@uifabric/styling";
export * from "@uifabric/utilities";

// (No @packageDocumentation comment for this package)
