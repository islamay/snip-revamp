import { ChangeEvent, FC, SyntheticEvent, useState, useRef, useEffect, SetStateAction } from 'react'
import { HiUserCircle } from 'react-icons/hi'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import styles from 'src/styles/Comment.module.css'
import moment from 'moment'
import classNames from 'classnames'
import axios from 'axios'

interface User {
    username: string;
    avatar?: string;
}

interface CommentProp {
    id: string;
    parentId?: string | null;
    replyToId: string | null;
    comment: string;
    date: string;
    openReply: boolean;
    setOpenReply: SetStateAction<null | any>
}

interface ReplyCommentFormProp {
    parentId: string;
    replyToId: string;
    setOpenReply: SetStateAction<null | any>
}




const ReplyCommentForm: FC<ReplyCommentFormProp> = ({
    replyToId,
    parentId,
    setOpenReply
}) => {
    const [reply, setReply] = useState('')
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setReply(e.target.value)
        e.currentTarget.style.height = 'auto'
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
    }

    const handleCloseReply = () => {
        setOpenReply(false)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <form className={styles['reply-comment-container']}>
            <textarea
                ref={inputRef}
                rows={1}
                onChange={handleChange}
                className={styles['reply-comment-input']}
                placeholder='Tulis sesuatu...'
                value={reply}
            ></textarea>

            <div className={styles['reply-comment-button-group']}>
                <AiOutlineCheck className={styles['reply-comment-submit']} size={25} />
                <AiOutlineClose className={styles['reply-comment-cancel']} size={25} onClick={handleCloseReply} />
            </div>

        </form>
    )
}

export const Comment: FC<CommentProp & User> = ({
    id,
    replyToId,
    date,
    username,
    comment,
    children,
    parentId,
    openReply,
    setOpenReply
}) => {

    const handleOpenReply = () => {
        setOpenReply(id)
    }

    return (
        <>
            <div className={classNames(styles['comment-container'], replyToId && styles['comment-reply'])}>
                <div className={styles['comment-avatar']}>
                    <HiUserCircle size={40} className={styles['comment-avatar-svg']} />
                </div>
                <div className={styles['comment-header']}>
                    <h3>{username}</h3>
                    <h4 className={styles['comment-date']}>{date}</h4>
                </div>
                <div className={styles['comment-main']}>
                    <h3>{comment}</h3>
                </div>

                <div className={styles['comment-footer']}>

                    {openReply
                        ? <ReplyCommentForm setOpenReply={setOpenReply} parentId={parentId || id} replyToId={id} />
                        : <h5 style={{ cursor: 'pointer' }} onClick={handleOpenReply}>balas</h5>}

                </div>

            </div >
            {children}
        </>
    )
}

export const CommentForm: FC = () => {
    const [comment, setComment] = useState('')

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
        e.currentTarget.style.height = 'auto'
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
    }

    return (
        <div className={styles['comment-form-container']}>
            <h3 className={styles['comment-form-title']}>Komentar</h3>
            <p className={styles['comment-form-subtitle']}>Berkomentar sebagai <strong>Dean</strong></p>
            <main className={styles['comment-form']}>
                <textarea className={styles['comment-form-input']} placeholder='Komentar' onChange={handleChange}></textarea>
                <button className={styles['comment-form-button']}>Posting</button>
            </main>
        </div>
    )
}

export default Comment