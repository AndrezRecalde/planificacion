import { useState } from "react";
import {
    ActionIcon,
    Box,
    Button,
    Combobox,
    Text,
    ThemeIcon,
    useCombobox,
} from "@mantine/core";
import { IconBrandDatabricks, IconSubtask } from "@tabler/icons-react";

const groceries = [
    "🍎 Apples",
    "🍌 Bananas",
    "🥦 Broccoli",
    "🥕 Carrots",
    "🍫 Chocolate",
    "🍇 Grapes",
];

export const BtnCombobox = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>
            <Combobox
                store={combobox}
                width={250}
                position="bottom-start"
                withArrow
                withinPortal={false}
                onOptionSubmit={(val) => {
                    setSelectedItem(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    {/* <Button onClick={() => combobox.toggleDropdown()}>
                        Pick item
                    </Button> */}
                    <ActionIcon
                        onClick={() => combobox.toggleDropdown()}
                        variant="default"
                        color="gray"
                        aria-label="Tableros"
                        radius="lg"
                        size={34}
                    >
                        <IconBrandDatabricks
                            style={{ width: "70%", height: "70%" }}
                        />
                    </ActionIcon>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>

            {/* <Box mt="xs">
                <Text span size="sm" c="dimmed">
                    Selected item:{" "}
                </Text>

                <Text span size="sm">
                    {selectedItem || "Nothing selected"}
                </Text>
            </Box> */}
        </>
    );
};
