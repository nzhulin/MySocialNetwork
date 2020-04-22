import React from 'react';
import userPhoto from '../../assets/images/user.jpg'
import styles from './Users.module.css';


let Users = (props) => {
    let pagesCount = Math.ceil(40 / props.pageSize)
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        < div >
            <div className={styles.pageNumbers}>
                {pages.map(p => {
                    return <div className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}-</div>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>

                </div>)
            }
        </div >
    </div>
}


export default Users;