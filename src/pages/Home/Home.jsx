import './Home.scss'
import MainHeading from "../../components/Heading/MainHeading.jsx";
import useCounter from "../../hooks/useCounter.jsx";
import {useData} from "../../context/DataContext.jsx";
import Product from "../../components/Product/Product.jsx";
import {useState} from "react";
import Input from "../../components/Form/Input/Input.jsx";
import {useForm} from "react-hook-form";

const Home = () => {
    const {products} = useData();
    let {minutes, seconds} = useCounter(15, 0);

    const [activeProductId, setActiveProductId] = useState(null);
    const handleChange = (id) => {
        setActiveProductId((prevId) => (prevId === id ? null : id))
    }

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        console.log('Form Submitted:', Object.fromEntries(formData.entries()));

        reset();
    }
    const watchAllFields = watch();


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-top">
                <div className="flex items-start justify-between">
                    <div className="w-100 lg:w-3/5 px-16 my-3.5">
                        <div className="information-section">
                            <div className="information-section__wrapper px-8 py-3.5">
                                <div className="information-countdown">
                                    <div className="information-countdown__wrapper py-3.5 px-2.5">
                                        <p className="ps-7">
                                            Votre offre est garantie pendant:<span> {minutes} : {seconds}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="information-content">
                                    <div
                                        className="information-content__wrapper flex flex-wrap items-start justify-center lg:justify-between mt-3.5">
                                        <span className="lg:flex-1 py-2 lg:py-3.5 px-2.5">Bravo ! </span>
                                        <p className="text-end lg:flex-2">Faites le premier pas pour soutenir vos
                                            fonctions
                                            sexuelles
                                            masculines. Agissez
                                            maintenant
                                            pour
                                            ne pas rater cette offre ! </p>
                                    </div>
                                </div>
                                <div className="information-banner mt-12">
                                    <img src="/images/image-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="products-section pt-2.5">
                            <MainHeading
                                title="Etape 1"
                                text="Cliquez sur la cure en abonnement de votre choix"
                            />
                            <div className="products-list">
                                {products.map((product) => (
                                    <label htmlFor={`product-${product.id}`} key={product.id} className="w-full">
                                        {/*<input type="radio" name="product" value={product.id}*/}
                                        {/*       id={`product-${product.id}`}/>*/}
                                        <Input
                                            type="radio"
                                            id={`product-${product.id}`}
                                            name="product"
                                            value={product.id}
                                            label={false}
                                            {...register('product', {required: 'Please select a product.'})}
                                            isEmpty={!watchAllFields.selectedProduct}
                                        />
                                        <Product
                                            product={product}
                                            isActive={activeProductId === product.id}
                                            onClick={() => handleChange(product.id)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-100 lg:w-2/5 px-8 my-3.5">
                        <section className="form-section">
                            <div className="form-section__wrapper">
                                <MainHeading
                                    title="Etape Finale"
                                    text="Renseignez vos informations de livraison et de paiement"
                                />
                            </div>
                            <div className="form-data__section px-8">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4">
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
                                <div className="w-full mt-2 mb-4 px-6" >
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
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="form-bottom">
                <div className="flex items-start justify-between">
                    <div className="w-100 lg:w-3/5 px-16 my-3.5">
                        <div className="guarantee-item mt-6 py-2.5 flex items-center justify-between">
                            <div className="guarantee-item__image px-3.5">
                                <img src="/images/garantie.png" alt=""/>
                            </div>
                            <div className="guarantee-item__content px-3.5">
                                <span>GARANTIE 100% SATISFAIT OU REMBOURSE PENDANT 1 AN</span>
                                <p>Vous ne risquez pas le moindre euro car vous bénéficiez pendant 1 AN de la
                                    garantie
                                    NutraZenith 100% satisfait ou remboursé. Vous pouvez prendre votre temps pour
                                    tester
                                    votre produit et ressentir ses bienfaits. Si pour une raison ou pour une autre,
                                    vous
                                    n’êtes pas 100% satisfait, vous renvoyez vos flacons et vous êtes remboursé
                                    rapidement. En plus, NutraZenith prend à sa charge les frais de réexpédition
                                    !</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 lg:w-2/5 px-8 my-3.5">
                        <button className="submit-button" type="submit">Pay</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Home