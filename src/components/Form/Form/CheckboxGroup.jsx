import Input from "../Input/Input.jsx";

const CheckboxGroup = ({register, watch, errors, onChange}) => {

    const watchAllFields = watch();

    return (
        <>
            <div className="w-full mt-2 mb-4 px-6">
                <Input
                    type="checkbox"
                    id="shipping_checkbox"
                    name="shipping_checkbox"
                    required={false}
                    label={true}
                    text="Je souhaite utiliser une adresse de livraison différente de mon adresse de facturation. "
                    {...register('shipping_checkbox')}
                    onChange={onChange}
                    isEmpty={!watchAllFields.shipping_checkbox}
                />
            </div>
            <div className="w-full mt-2 mb-4 px-6">
                <Input
                    type="checkbox"
                    id="cgv"
                    name="cgv"
                    required={true}
                    label={true}
                    text="J'accepte les Conditions Générales de Vente"
                    {...register('cgv')}
                    isEmpty={!watchAllFields.cgv}
                />
            </div>
        </>

    )
}
export default CheckboxGroup