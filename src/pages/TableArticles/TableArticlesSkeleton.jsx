//styles
import "./TableArticles.scss"

//react
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from "primereact/skeleton";

const TableArticlesSkeleton = () => {

    const actionTemplate = () => {
        return (
            <div className="actionTemplate">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8A8A8A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                </svg>
            </div>
        )
    }
    const skeletonTemplate = () => {
        return (
            <div className="actionTemplate">
                <Skeleton width="100%" height="20px" />
            </div>
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
        ];

    return (
        <div className='TableArticles'>
            <div className="container">
                <div className="title">
                    <Skeleton width="280px" height="40px" />
                    <Skeleton width="280px" height="40px" />
                </div>
                <DataTable value={data} stripedRows tableStyle={{ minWidth: '50rem' }}>
                    <Column field="title" body={skeletonTemplate}></Column>
                    <Column field="date" body={skeletonTemplate}></Column>
                    <Column field="status" body={skeletonTemplate}></Column>
                    <Column field="actions" body={skeletonTemplate} style={{ width: '70px' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default TableArticlesSkeleton