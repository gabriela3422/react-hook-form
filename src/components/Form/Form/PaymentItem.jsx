import {useState} from "react";
import MainButton from "../../Button/MainButton.jsx";
import PaymentDetails from "./PaymentDetails.jsx";

const PaymentItem = ({register, watch, errors}) => {
    const [isActive, setIsActive] = useState(1);

    const handleClick = (id) => {
        setIsActive(id)
    }

    return (
        <>
            <div className="payment-block">
                <div className="payment-block__wrapper">
                    <div className="payment-tab__buttons flex">
                        <div
                            className={`${isActive === 1 ? "active" : ""} w-full payment-tab__button px-5 py-5`}
                            onClick={() => handleClick(1)}
                        >
                            <div className="payment-tab__icon">
                                <img src="/images/cb.png" title="Paiement par carte"/>
                            </div>
                            <span className="w-100 text-center block">Paiement par carte</span>
                        </div>
                        <div
                            className={`${isActive === 2 ? "active" : ""} w-full  payment-tab__button px-5 py-5`}
                            onClick={() => handleClick(2)}
                        >
                            <div className="payment-tab__icon">
                                <img src="/images/sepa.png" title="Paiement par prélèvement"/>
                            </div>
                            <span className="w-100 text-center block">Paiement par prélèvement</span>
                        </div>
                    </div>
                    <div className="payment-tab__content py-5">
                        {isActive === 1 && (
                            <div className="payment-content__item text-center pt-9 pb-2">
                                <MainButton
                                    text='Payer par Carte Bancaire'/>
                            </div>
                        )}
                        {isActive === 2 && (
                            <div className="payment-content__item">
                                <p className="text-center px-6 my-4">Vous trouverez votre numéro IBAN et code BIC/SWIFT sur
                                    votre relevé d'identité
                                    bancaire (RIB)
                                </p>
                                <PaymentDetails register={register} watch={watch} errors={errors}/>
                                <div className="text-center">
                                    <MainButton
                                        text='Valider ma commande'/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaymentItem