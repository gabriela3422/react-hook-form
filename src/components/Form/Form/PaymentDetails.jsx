import Input from "../Input/Input.jsx";

const PaymentDetails = ({ register, watch, errors }) => {
    const watchAllFields = watch();

    return (
        <div className="payment-details px-6">
            <div className="w-full pt-2 mb-4">
                <label className="mb-1.5" htmlFor="iban">IBAN:</label>
                <Input
                    type="text"
                    id="iban"
                    name="iban"
                    required={true}
                    placeholder="Ex: FRXX XXXX XXXX XXXX XXXX"
                    {...register("iban", {
                        required: "Card number is required.",
                        pattern: {
                            value: /^\d{16}$/,
                            message: "Card number must be 16 digits.",
                        },
                    })}
                    error={errors.iban?.message}
                    isEmpty={!watchAllFields.iban}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <label className="mb-1.5" htmlFor="bic">BIC:</label>
                <Input
                    type="text"
                    id="bic"
                    name="bic"
                    required={true}
                    placeholder="Ex: CICIFRXXXXXX"
                    {...register("bic", {
                        required: "Bic is required.",
                        pattern: {
                            value: /.{8,}/,
                            message: "Bic is not valid.",
                        },
                    })}
                    error={errors.bic?.message}
                    isEmpty={!watchAllFields.bic}
                />
            </div>
        </div>
    );
};
export default PaymentDetails