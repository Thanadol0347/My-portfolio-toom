import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export default class Portfoliolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        this.getAllStudents()
    }

    getAllStudents() {
        axios.get('http://localhost:4000/portfolio/')
        .then(res =>{
          this.setState({
              students: res.data
          })
        })
        .catch((error) => {
            console.log(error)
        })
        .catch((error) => {

        })
    }

    deleteStudent = (id) => {
        axios.delete('http://localhost:5000/portfolio/delete-portfolio/' + id)
        .then((res) => {
            this.getAllStudents()
        })
        .catch((error) => {
          console.log(error)
        })
    }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Code</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.students.map((res, index) => (
                <tr key={res._id}>
                    <td>{index + 1}</td>
                    <td>{res.code}</td>
                    <td>{res.firstname}</td>
                    <td>{res.lastname}</td>
                    <td>{res.email}</td>
                    <td>
                      <Link className='btn btn-warning'
                      to={'/edit-student/'+ res._id}>Edit
                      </Link>{' '}
                      <Button className='btn btn-danger sm' onClick={() => (window.confirm('Are you sure you to delete this item?') && this.deleteStudent(res._id))}>
                        Delete
                      </Button>
                    </td>
                </tr>
                ))}
          </tbody>
        </Table>
      </div>
    )
  }
}