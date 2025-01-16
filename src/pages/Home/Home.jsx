import './Home.scss'
import MainHeading from "../../components/Heading/MainHeading.jsx";
import useCounter from "../../hooks/useCounter.jsx";
import {useData} from "../../context/DataContext.jsx";
import Product from "../../components/Product/Product.jsx";
import {useState} from "react";
import Input from "../../components/Form/Input/Input.jsx";
import {useForm} from "react-hook-form";
import Select from "../../components/Form/Select/Select.jsx";
import BillingForm from "../../components/Form/Form/BillingForm.jsx";
import CheckboxGroup from "../../components/Form/Form/CheckboxGroup.jsx";
import ShippingForm from "../../components/Form/Form/ShippingForm.jsx";
import PaymentDetails from "../../components/Form/Form/PaymentDetails.jsx";
import PaymentItem from "../../components/Form/Form/PaymentItem.jsx";

const Home = () => {
    const {products, country} = useData();
    let {minutes, seconds} = useCounter(15, 0);

    const [showShipping, setShowShipping] = useState(false);

    const [activeProductId, setActiveProductId] = useState(1);
    const handleChange = (id) => {
        setActiveProductId((prevId) => (prevId === id ? null : id))
    }
    const handleCheckboxChange = (event) => {
        setShowShipping(event.target.checked);
    };

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

        if (!formData.get('product') || formData.get('product') === 'null') {
            formData.set('product', "1");
        }

        console.log('Form Submitted:', Object.fromEntries(formData.entries()));

        reset();
    }

    const watchAllFields = watch();


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-top">
                <div className="flex flex-wrap items-start justify-center lg:justify-between">
                    <div className="w-100 lg:w-3/5 px-6 lg:px-16 my-3.5">
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
                                        <Input
                                            type="radio"
                                            id={`product-${product.id}`}
                                            name="product"
                                            value={product.id}
                                            label={false}
                                            {...register('product')}
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
                    <div className="w-100 lg:w-2/5 px-6 lg:px-8 my-3.5">
                        <section className="form-section">
                            <div className="form-section__wrapper">
                                <MainHeading
                                    title="Etape Finale"
                                    text="Renseignez vos informations de livraison et de paiement"
                                />
                            </div>
                            <div className="form-data__section  px-6 lg:px-8">
                                <BillingForm getValues={getValues} register={register} watch={watch} errors={errors}
                                             country={country}/>
                                <CheckboxGroup onChange={handleCheckboxChange} register={register} watch={watch}
                                               errors={errors}/>
                                {showShipping && (<ShippingForm country={country} register={register} watch={watch}
                                                                errors={errors}/>)}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="form-bottom">
                <div className="flex flex-wrap flex-col-reverse lg:flex-row items-start justify-between">
                    <div className="w-100 lg:w-3/5 px-6 lg:px-16 my-3.5">
                        <div className="guarantee-item flex-wrap mt-6 py-2.5 flex items-center justify-center lg:justify-between">
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
                    <div className="w-100 lg:w-2/5 px-3 lg:px-3.5 my-3.5">
                        <PaymentItem register={register} watch={watch} errors={errors}/>
                        <div className="payment-block__info mt-6">
                            <p>*Conditions de règlement : en commandant aujourd'hui, je m'inscris automatiquement au
                                service
                                GRATUIT de cure en abonnement. Lorsque ma cure actuelle se termine, je reçois une
                                nouvelle
                                cure facturée aux mêmes conditions avantageuses qu'aujourd'hui. La livraison est
                                toujours
                                gratuite et je ne dois pas repasser de commande. Mes coordonnées bancaires sont
                                conservées
                                pendant la durée de mon abonnement. Je reçois un email d'information avant chaque
                                renouvellement de ma cure (pas de mauvaise surprise). Je peux suspendre, décaler ou
                                annuler
                                ma cure en abonnement par email ou téléphone librement, à tout moment, sans
                                justification et
                                sans le moindre frais.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </form>
    )
}

export default Home