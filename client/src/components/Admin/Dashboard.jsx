import React from 'react'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from 'chart.js'
import Loader from '../layout/Loader';

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
    <div>
        <h3>
            {title === 'Income' && '₹'}
            {value}
        </h3>
        <p>{title}</p>
    </div>
)

const Dashboard = () => {
    const loading = false;
    const data = {
        labels: ['Preparing', 'Shipped', 'Deliverd'],
        datasets: [{
            label: 'No. of orders',
            data: [2, 4, 6],
            backgroundColor: ['rgba(159,63,176,.2)', 'rgba(78,63,176,.2)', 'rgba(156,0,60,.2)'],
            borderColor: ['rgb(159,63,176)', 'rgb(78,63,176)', 'rgb(156,0,60)']
        }]
    }

    return <section className="dashboard">

        {loading === true ? <Loader />
            : <main>
                <article>
                    <Box title='Users' value={123} />
                    <Box title='Orders' value={123} />
                    <Box title='Income' value={29123} />
                </article>

                <section>
                    <div>
                        <Link to='/admin/orders'>View Orders</Link>
                        <Link to='/admin/users'>View Users</Link>
                    </div>

                    <aside>
                        <Doughnut data={data} />
                    </aside>
                </section>
            </main>}

    </section>
}

export default Dashboard