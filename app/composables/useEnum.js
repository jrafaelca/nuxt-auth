import {useI18n} from 'vue-i18n';

export const useEnum = (items) => {
    const {t} = useI18n();

    const cases = items.reduce((acc, {value, label}) => {
        acc[value.toUpperCase()] = {value, label};
        return acc;
    }, {});

    const getLabel = (status) => t(cases[status?.toUpperCase()]?.label);
    const getColor = (status) => cases[status?.toUpperCase()]?.color;
    const getIcon = (status) => cases[status?.toUpperCase()]?.icon;

    const options = items.map((item) => ({
        value: item.value,
        label: item.label ? t(item.label) : item.label,
        ...(item.color && {chip: {color: item.color}}),
        ...(item.icon && {icon: item.icon}),
    }));

    return {
        cases,
        getColor,
        getLabel,
        getIcon,
        options,
    };
};