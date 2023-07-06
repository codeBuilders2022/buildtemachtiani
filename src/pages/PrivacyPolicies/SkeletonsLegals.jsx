import React from 'react'

import "./PrivacyPolicies.scss"
import Cards from '../../components/atoms/Cards/Cards'
import Back from '../../components/atoms/Back/Back'
import { Skeleton } from 'primereact/skeleton'

const SkeletonsLegals = () => {

  return (
    <Cards className="PrivacyPolicies dark:bg-gray-600 bg-white">
        <Back className={"_backlk_"} skeleton />
        <div style={{marginBottom: 30}}>
            <Skeleton width='200px' height='20px'/>
        </div>
        <div className="bg-slate-100 dark:bg-gray-500 inside_PrivacyPolicies">
            <div style={{display: 'flex', flexDirection: "column", gap: 15}}>
                {[...Array(50)].map((_, idx) => (
                    <Skeleton key={idx} width='100%' height='12px'/>
                ))}

            </div>
        </div>
    </Cards>
  );
}

export default SkeletonsLegals