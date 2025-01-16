import MainHeading from "../../Heading/MainHeading.jsx";
import Input from "../Input/Input.jsx";
import Select from "../Select/Select.jsx";

const BillingForm = ({register, watch, errors, country, getValues}) => {

    const watchAllFields = watch();

    return (
        <>
            <div className="w-full mt-2 px-6">
                <span className="mb-2">Civilité *</span>
                <Input
                    type="radio"
                    id="billing_civilite_madame"
                    name="billing_civilite"
                    value="billing_civilite_madame"
                    label={true}
                    text="Madame"
                    {...register('billing_civilite', {required: 'Please select your civilité.'})}
                    error={errors.billing_civilite?.message}
                    isEmpty={!watchAllFields.billing_civilite}
                />
                <Input
                    type="radio"
                    id="billing_civilite_monsieur"
                    name="billing_civilite"
                    value="billing_civilite_monsieur"
                    label={true}
                    text="Monsieur"
                    {...register('billing_civilite', {required: 'Please select your civilité.'})}
                    error={errors.billing_civilite?.message}
                    isEmpty={!watchAllFields.billing_civilite}
                />
            </div>
            <div className="w-full mt-2 mb-4">
                <Input
                    type="text"
                    id="billing_nom"
                    name="billing_nom"
                    required={true}
                    placeholder="Nom *"
                    {...register('billing_nom', {required: 'Nom is required.'})}
                    error={errors.billing_nom?.message}
                    isEmpty={!watchAllFields.billing_nom}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="text"
                    id="billing_prenom"
                    name="billing_prenom"
                    required={true}
                    placeholder="Prénom *"
                    {...register('billing_prenom', {required: 'Prénom is required.'})}
                    error={errors.billing_prenom?.message}
                    isEmpty={!watchAllFields.billing_prenom}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="email"
                    id="billing_email"
                    name="billing_email"
                    required={true}
                    placeholder="Email *"
                    {...register('billing_email', {
                        required: 'Email is required.',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Email is invalid.',
                        },

                    })}
                    error={errors.billing_email?.message}
                    isEmpty={!watchAllFields.billing_email}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="email"
                    id="billing_email_confirmation"
                    name="billing_email_confirmation"
                    required={true}
                    placeholder="Confirmation adresse email *"
                    {...register('billing_email_confirmation', {
                        required: 'Confirmation email is required.',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Confirmation email is invalid.',
                        },
                        validate: (value) =>
                            value === getValues('billing_email') || 'Emails do not match.',
                    })}
                    error={errors.billing_email_confirmation?.message}
                    isEmpty={!watchAllFields.billing_email_confirmation}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="tel"
                    id="billing_phone_number"
                    name="billing_phone_number"
                    required={true}
                    placeholder="Numéro de téléphone"
                    {...register('billing_phone_number', {
                        required: 'téléphone is required.',
                        pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                            message: 'Téléphone is invalid.',
                        },
                    })}
                    error={errors.billing_phone_number?.message}
                    isEmpty={!watchAllFields.billing_phone_number}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="date"
                    id="billing_birth_date"
                    name="billing_birth_date"
                    required={true}
                    placeholder="JJ/MM/AAAA (chiffres uniquement)"
                    {...register('billing_birth_date', {
                        required: 'Birth date is required.',
                        pattern: {
                            value: /^[0-9]{2,4}[ /.-]{1}[0-9]{2}[ /.-]{1}[0-9]{2,4}$/,
                            message: 'Birth date is invalid.',
                        },
                    })}
                    error={errors.billing_birth_date?.message}
                    isEmpty={!watchAllFields.billing_birth_date}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="text"
                    id="billing_streetAddress"
                    name="billing_streetAddress"
                    required={true}
                    placeholder="Adresse *"
                    {...register('billing_streetAddress', {required: 'Adresse is required.'})}
                    error={errors.billing_streetAddress?.message}
                    isEmpty={!watchAllFields.billing_streetAddress}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="text"
                    id="billing_postalCode"
                    name="billing_postalCode"
                    required={true}
                    placeholder="Code Postal *"
                    {...register('billing_postalCode', {required: 'Postal Code is required.'})}
                    error={errors.billing_postalCode?.message}
                    isEmpty={!watchAllFields.billing_postalCode}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Input
                    type="text"
                    id="billing_locality"
                    name="billing_locality"
                    required={true}
                    placeholder="Ville *"
                    {...register('billing_locality', {required: 'Ville is required.'})}
                    error={errors.billing_locality?.message}
                    isEmpty={!watchAllFields.billing_locality}
                />
            </div>
            <div className="w-full pt-2 mb-4">
                <Select
                    id="billing_country"
                    name="billing_country"
                    required={true}
                    options={country}
                    {...register('billing_country', {required: 'Country is required.'})}
                    isEmpty={!watchAllFields.billing_country}
                />
            </div>
        </>
    )
}
export default BillingForm