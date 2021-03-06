import React, {useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createDeck} from "../../../../../bll/currentUserDecks/currentUserDecksReducer";
import styles from "./CreateDeckForm.module.css"
import CreateCardTextarea from "../../../../common/createCardTextarea/CreateCardTextarea";
import * as yup from "yup";
import CreateCardButton from "../../../../common/CreateCardButton/CreateCardButton";
import {getRestLimit} from "../../../../../helpers/restLimit/restLimit";

type CreateDeckFormType = {
    deckName: string
}

type PropsType = {
    onIsMultiDeckChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isMultiDeck: boolean
    isPreventFetching: boolean
    setIsMultiDeck: (isMultiDeck: boolean) => void
}

const CreateDeckForm: React.FC<PropsType> = React.memo(({
                                                            onIsMultiDeckChange,
                                                            isMultiDeck,
                                                            isPreventFetching,
                                                            setIsMultiDeck
                                                     }) => {

    const dispatch = useDispatch();
    const deckNameMaxLength = 20;

    const schema = yup.object().shape({
        deckName: yup.string().required('⚠ please, fill up deck name')
            .max(deckNameMaxLength, `Limit ${deckNameMaxLength}`),
    });

    const {register, handleSubmit, errors, reset, watch} = useForm<CreateDeckFormType>({
        mode: 'onBlur',
        validationSchema: schema
    });

    const deckNameRestLimit = useMemo(() => {
        return getRestLimit(deckNameMaxLength, watch().deckName)
    }, [deckNameMaxLength, watch().deckName]);

    const onSubmit = handleSubmit((data) => {
            dispatch(createDeck({name: data.deckName}));
            reset();
        }
    );

    useEffect(() => {
        setIsMultiDeck(false);
    }, []);

    return (
        <div className={styles.cardform__wrap}>
            <form className={styles.form}  onSubmit={onSubmit}>
                <div className={styles.formtextarea__wrap}>
                    <CreateCardTextarea
                        maxLength={deckNameMaxLength}
                        restLimit={deckNameRestLimit}
                        register={register}
                        name='deckName'
                        errors={errors}
                        placeholder='Enter deck name'
                        autoFocus={true}
                    />
                </div>
                <div className={styles.checkBox}>
                    <input
                        className={styles.form__checkbox}
                        type='checkbox'
                        checked={isMultiDeck}
                        onChange={onIsMultiDeckChange}
                        id='checkbox1'
                    />
                    <label tabIndex={2} className={styles.form__label} htmlFor="checkbox1"> </label>
                    <div className={styles.checkBox__span} >multi answer deck</div>
                </div>
                <div  className={styles.formbuttons__wrap}>
                    <CreateCardButton
                        disabled={isPreventFetching}
                        className={styles.form__button}
                    >
                        Create
                    </CreateCardButton>
                </div>
            </form>
        </div>
    )
});
export default CreateDeckForm;