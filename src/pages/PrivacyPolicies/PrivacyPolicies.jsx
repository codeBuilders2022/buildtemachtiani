import React from 'react'

import "./PrivacyPolicies.scss"
import Cards from '../../components/atoms/Cards/Cards'
import { Header } from '../../components'
import Back from '../../components/atoms/Back/Back'

const PrivacyPolicies = () => {
  return (
    <Cards className="PrivacyPolicies dark:bg-gray-600 bg-white">
        <Back className={"_backlk_"} url={"/"} />
        <Header category={"Políticas"} title={"Protección de datos personales"} />
        <div className="bg-slate-100 dark:bg-gray-500 inside_PrivacyPolicies">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora
                accusantium incidunt velit cum fuga nulla quod nobis, perspiciatis,
                laudantium magnam alias cupiditate quia dicta error ab. Voluptates
                recusandae ea dolor unde. Aspernatur dignissimos praesentium non,
                officiis beatae ut harum ipsa quaerat fugit error ab totam saepe ex
                deserunt voluptatum nulla sunt voluptates! Exercitationem temporibus
                pariatur quae, sint enim molestias, non voluptatibus quidem at iure ut
                perferendis officia maxime autem sapiente. Itaque ex quasi quaerat
                praesentium, consequuntur commodi hic nesciunt!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat
                voluptatem minus tenetur ducimus incidunt consequatur dicta! Illo
                expedita ratione fuga, molestiae modi ab error exercitationem
                distinctio, sed sapiente, reprehenderit officiis impedit? Libero nobis
                recusandae doloremque dignissimos debitis quo aliquid, ab odit,
                veritatis pariatur sequi aliquam ducimus harum laborum nostrum
                possimus deleniti praesentium est quis dolores molestiae tempora iste
                aut? Sint cumque ipsum, quibusdam cupiditate nemo eaque ipsa ducimus,
                debitis vero omnis eum iste labore tempora excepturi totam deserunt
                quisquam expedita. Doloremque excepturi mollitia ratione, commodi sunt
                quidem optio quam et fuga cupiditate totam quasi repudiandae nihil
                necessitatibus, accusantium quia.
            </p>
        </div>
    </Cards>
  );
}

export default PrivacyPolicies