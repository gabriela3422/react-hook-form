import Input from "../Input/Input.jsx";
import Select from "../Select/Select.jsx";

const ShippingForm = ({register, watch, errors, country, getValues}) => {

    const watchAllFields = watch();

    return (
        <>
            <div className="w-full mt-2 px-6">
                <span className="mb-2">Civilité *</span>
                <Input
                    type="radio"
                    id="shipping_civilite_madame"
                    name="shipping_civilite"
                    value="shipping_civilite_madame"
                    label={true}
                    text="Madame"
                    {...register('shipping_civilite', {required: 'Please select your civilité.'})}
                    error={errors.shipping_civilite?.message}
                    isEmpty={!watchAllFields.shipping_civilite}
                />
                <Input
                    type="radio"
                    id="shipping_civilite_monsieur"
                    name="shipping_civilite"
                    value="shipping_civilite_monsieur"
                    label={true}
                    text="Monsieur"
                    {...register('shipping_civilite', {required: 'Please select your civilité.'})}
                    error={errors.shipping_civilite?.message}
                    isEmpty={!watchAllFields.shipping_civilite}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="shipping_nom"
                    name="shipping_nom"
                    required={false}
                    placeholder="Nom *"
                    {...register('shipping_nom', {required: 'Nom is required.'})}
                    error={errors.shipping_nom?.message}
                    isEmpty={!watchAllFields.shipping_nom}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="shipping_prenom"
                    name="shipping_prenom"
                    required={false}
                    placeholder="Prénom *"
                    {...register('shipping_prenom', {required: 'Prénom is required.'})}
                    error={errors.shipping_prenom?.message}
                    isEmpty={!watchAllFields.shipping_prenom}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="tel"
                    id="shipping_phone_number"
                    name="shipping_phone_number"
                    required={false}
                    placeholder="Numéro de téléphone"
                    {...register('shipping_phone_number', {
                        required: 'téléphone is required.',
                        pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                            message: 'Téléphone is invalid.',
                        },
                    })}
                    error={errors.shipping_phone_number?.message}
                    isEmpty={!watchAllFields.shipping_phone_number}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="shipping_streetAddress"
                    name="shipping_streetAddress"
                    required={false}
                    placeholder="Adresse *"
                    {...register('shipping_streetAddress', {required: 'Adresse is required.'})}
                    error={errors.shipping_streetAddress?.message}
                    isEmpty={!watchAllFields.shipping_streetAddress}
                />
            </div>

            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="shipping_postalCode"
                    name="shipping_postalCode"
                    required={false}
                    placeholder="Code Postal *"
                    {...register('shipping_postalCode', {required: 'Postal Code is required.'})}
                    error={errors.shipping_postalCode?.message}
                    isEmpty={!watchAllFields.shipping_postalCode}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="shipping_locality"
                    name="shipping_locality"
                    required={false}
                    placeholder="Ville *"
                    {...register('shipping_locality', {required: 'Ville is required.'})}
                    error={errors.shipping_locality?.message}
                    isEmpty={!watchAllFields.shipping_locality}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Select
                    id="shipping_country"
                    name="shipping_country"
                    required={false}
                    options={country}
                    {...register('shipping_country', {required: 'Country is required.'})}
                    isEmpty={!watchAllFields.shipping_country}
                />
            </div>
        </>
    )
}

export default ShippingForm