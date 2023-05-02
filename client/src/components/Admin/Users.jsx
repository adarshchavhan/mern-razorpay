import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Users = () => {
    return (
        <section className="tableClass">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#13wi2jei</td>
                            <td>{`Ada Doe`}</td>
                            <td>
                                <img src="https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg" alt="" />
                            </td>
                            <td>{'Admin'}</td>
                            <td>{'24-2-2023'}</td>
                        </tr>

                        <tr>
                            <td>#13wi2jei</td>
                            <td>{`Ada Doe`}</td>
                            <td>
                                <img src="https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg" alt="" />
                            </td>
                            <td>{'User'}</td>
                            <td>{'24-2-2023'}</td>
                        </tr>


                        <tr>
                            <td>#13wi2jei</td>
                            <td>{`Ada Doe`}</td>
                            <td>
                                <img src="https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg" alt="" />
                            </td>
                            <td>{'User'}</td>
                            <td>{'24-2-2023'}</td>
                        </tr>

                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Users