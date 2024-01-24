import { useState } from "react";
import { CloseButton, Combobox, InputBase, useCombobox } from "@mantine/core";

const groceries = [
    "🍎 Apples",
    "🍌 Bananas",
    "🥦 Broccoli",
    "🥕 Carrots",
    "🍫 Chocolate",
    "🍇 Grapes",
];

export const DataCombobox = () => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState(null);
    const [search, setSearch] = useState("");

    const shouldFilterOptions = groceries.every((item) => item !== search);

    const filteredOptions = shouldFilterOptions
        ? groceries.filter((item) =>
              item.toLowerCase().includes(search.toLowerCase().trim())
          )
        : groceries;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
                setValue(val);
                setSearch(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    rightSection={
                        value !== null ? (
                            <CloseButton
                                size="sm"
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={() => {setValue(null); setSearch("")}}
                                aria-label="Clear value"
                            />
                        ) : (
                            <Combobox.Chevron />
                        )
                    }
                    value={search}
                    onChange={(event) => {
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                        setSearch(event.currentTarget.value);
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                        combobox.closeDropdown();
                        setSearch(value || "");
                    }}
                    placeholder="Search value"
                    rightSectionPointerEvents={value === null ? "none" : "all"}
                    label="Elige el tipo de proyecto"
                />
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {options.length > 0 ? (
                        options
                    ) : (
                        <Combobox.Empty>
                            No se ha encontrado nada
                        </Combobox.Empty>
                    )}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
