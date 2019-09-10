
import React, { Fragment, useEffect, useState } from 'react'
import { Input } from 'reactstrap'

function signUp(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        setTimeout(()=>console.log('dajskla'),1000);
    },[]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState({

    });

    return (
        <Fragment>
            <div class="container d-flex h-100">
                <div class="row align-items-center h-100">
                    <div className="broder-login product-item card__content mx-auto">
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default signUp;