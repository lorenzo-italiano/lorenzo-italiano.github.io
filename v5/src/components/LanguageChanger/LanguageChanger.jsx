import {useTranslation} from "react-i18next";
import Select from "react-select";
import frenchFlag from "../../assets/french-flag.png"
import englishFlag from "../../assets/uk-flag.png"

function LanguageChanger() {

    const { i18n } = useTranslation()

    const countries = [
        { value: 'fr', label: 'French', image: frenchFlag },
        { value: 'en', label: 'English', image: englishFlag }
    ]

    const selectStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                '&:hover': {color: 'black'},
            }
        },
        dropdownIndicator: (styles) => ({...styles, '&:hover': {cursor:'pointer'}}),
    }

    const handleSelectChange = (event) => {
        if(event !== null){
            i18n.changeLanguage(event.value)
        }
    }

    return (
        <>
            <Select
                    styles={selectStyles}
                    options={countries}
                    defaultValue={i18n.language === "fr" ? countries[0] : countries[1]}
                    isSearchable={false}
                    onChange={ e => handleSelectChange(e)}
                    formatOptionLabel={country => (
                        <div className="country-option">
                            <img src={country.image} alt="country-image" />
                        </div>
                    )}
            />
        </>
    )
}

export default LanguageChanger
