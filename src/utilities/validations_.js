export const ValidationNumbers = (string) => /^[0-9]+$/.test(string);

export const ValidationNumbers4D = (string) => /^[0-9]+(?:\.\d{0,4})?$/.test(string);

export const ValidationEmail = (string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(string);

export const ValidationCurp = (string) => /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[\dA-Z]{1}\d{1}$/.test(string);

export const ValidationRfc = (string) => /^([A-ZÑ\x26]{4,5}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))((-)?([A-Z\d]{2,3}))?$/.test(string);

export const ValidationEmpty = (value) => value !== "";

export const ValidationSelect = (value) => !!value;

export const ValidationMultiple = (validations) => validations.every((validation) => validation());

export const ValidationOneUpper = (string) => /[A-Z]/.test(string);

export const ValidationOneLower = (string) => /[a-z]/.test(string);

export const ValidationOneNumber = (string) => /\d+/.test(string);

export const ValidationZiseString = (string, limit) => string?.length >= limit;

export const ValidationZiseStringExact = (string, limit) => string?.length === limit;

export const ValidationZiseStringEqual = (string, limit) => string?.length !== limit;


export const UpdateValue = (e, id, inputList, setInputList) => {
    const value = e.hasOwnProperty('value') ? e.value : e.target.value;
    const inputCopy = { ...inputList, [id]: { ...inputList[id], value } };
    setInputList(inputCopy);
}

const validationFunctions = {
    "number": ValidationNumbers,
    "number4D": ValidationNumbers4D,
    "email": ValidationEmail,
    "empty": ValidationEmpty,
    "select": ValidationSelect,
    "multiple": ValidationSelect,
    "optional": () => true,
    "curp": ValidationCurp,
    "rfc": ValidationRfc,
    "validationSize": ValidationZiseStringExact,
    "validationSizeStr": ValidationZiseString,
  };
  
  export const ColorValidation = ({propertyName, inputList, validationType = "empty", multipleValidatios, limit}) => {
    const codeElement = document.getElementById(propertyName);
    const obligatoryElement = document.getElementById(propertyName + "obligatory");
    const validationFunction = validationFunctions[validationType];

    // Verificar que las variables no sean undefined o null
    if (!codeElement || !obligatoryElement || !validationFunction || !inputList || !limit) {
      return;
    }

    const result = validationFunction(inputList[propertyName]?.value, limit);
  
    if (result === false && inputList[propertyName]?.value != null) {
      codeElement.style.border = '1px solid red';
      obligatoryElement.style.color = 'red';
    } else {
      codeElement.style.border = '1px solid #fff';
      obligatoryElement.style.color = '#fff';
    }
};


  export const SubmitValidation = (inputList, setInputList, limit) => {
    let noErrors = true;

    for (const input of Object.values(inputList)) {
        if (input.value === null && input.validationType !== "optional") {
            setInputList({
                ...inputList,
                [input.name]: {
                    ...input,
                    value: ""
                }
            });
        }

        if (input.validationType || input.type[0]) {
            // eslint-disable-next-line
            switch (input.validationType || input.type[0]) {
                case "number":
                    if (!ValidationNumbers(input?.value)) {
                        noErrors = false;
                    }
                    break;
                case "email":
                    if (!ValidationEmail(input?.value)) {
                        noErrors = false;
                    }
                    break;
                case "empty":
                    if (!ValidationEmpty(input?.value)) {
                        noErrors = false;
                    }
                    break;
                case "select":
                    if (!ValidationSelect(input)) {
                        noErrors = false;
                    }
                    break;
                case "curp":
                    if (!ValidationCurp(input?.value)) {
                        noErrors = false;
                    }
                    break;
                case "rfc":
                    if (!ValidationRfc(input?.value)) {
                        noErrors = false;
                    }
                    break;
                case "validationSize":
                    if (!ValidationZiseStringExact(input?.value, input?.limit)) {
                        noErrors = false;
                    }
                    break;
                case "validationSizeStr":
                    if (!ValidationZiseString(input?.value, input?.limit)) {
                        noErrors = false;
                    }
                    break;
            }
        }
    }

    return noErrors;
};
