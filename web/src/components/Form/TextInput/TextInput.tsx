import ValidationError from "../../../assets/icons/validationError";
import WarningForm from "../../../assets/icons/warningForm";
import "./TextInput.css";
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    validationState: "default" | "warning" | "error";
    message?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    validationState,
    message,
    ...props
}) => {
    function addClass(element, className) {
        const parentDiv = element.parentElement;
        if (parentDiv && !parentDiv.classList.contains(className)) {
            parentDiv.classList.add(className);
        }
    }

    function removeClass(element, className) {
        const parentDiv = element.parentElement;
        if (parentDiv && parentDiv.classList.contains(className)) {
            parentDiv.classList.remove(className);
        }
    }

    return (
        <div className="form-input-wrapper">
            <div
                className={`form-text-input ${validationState === "error" ? "error" : ""}  ${validationState === "warning" ? "warning" : ""}`}
                id="form-text-input"
            >
                <input
                    onFocus={(e) => addClass(e.target, "focus")}
                    onBlur={(e) => removeClass(e.target, "focus")}
                    {...props}
                />
                {validationState === "error" && (
                    <ValidationError width="20" height="20" />
                )}
                {validationState === "warning" && (
                    <WarningForm width="20" height="20" />
                )}
            </div>
            {validationState === "error" && (
                <p className="input-error">{message}</p>
            )}
            {validationState === "warning" && (
                <p className="input-warning">{message}</p>
            )}
        </div>
    );
};

export default TextInput;
