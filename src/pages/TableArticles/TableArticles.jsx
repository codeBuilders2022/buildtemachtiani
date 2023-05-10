//styles
import "./TableArticles.scss"

//react
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ExteriorCard from "../../components/atoms/ExteriorCard/ExteriorCard";
import { Header } from "../../components";
import { NavLink } from "react-router-dom";

const TableArticles = () => {

    const actionTemplate = ({id}) => {
        return (
            <NavLink to={`/article/my-article/${id}`}>
                <div className="actionTemplate">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8A8A8A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                    </svg>
                </div>
            </NavLink>
        )
    }
    const data =
        [
            {
                id: 1,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Pendiente',
            },
            {
                id: 2,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Aprobado',
            },
            {
                id: 3,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Pendiente',
            },
            {
                id: 4,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Aprobado',
            },
            {
                id: 5,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Pendiente',
            },
            {
                id: 6,
                title: 'Atención al shock cardiogénico en centros con programa de código infarto sin cirugía cardiaca. ',
                date: "2023/05/7",
                status: 'Pendiente',
            },
        ];

    return (
        <div className='TableArticles'>
            <ExteriorCard>
                <div className="containerr">
                    <Header title={"Mis artículos"} button="Enviar nuevo artículo" url={"/article-create"}/>
                    <DataTable value={data} stripedRows tableStyle={{ minWidth: '30rem' }}>
                        <Column field="title" header="Título"></Column>
                        <Column field="date" header="Fecha"></Column>
                        <Column field="status" header="Estado"></Column>
                        <Column field="actions" header="Acciones" body={actionTemplate}></Column>
                    </DataTable>
                </div>
            </ExteriorCard>
        </div>
    )
}

export default TableArticles