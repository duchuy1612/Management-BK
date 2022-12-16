import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import dateFormat, { masks } from "dateformat";
import { PayFees } from '../actions/studentActions'
import Loader from '../components/Loader'
import {
  STUDENT_FEES_RESET,
  STUDENT_SEARCH_CLEAR,
} from '../constants/studentConstants'
// import axios from 'axios'
import { studentSearch } from '../actions/studentActions'
const StudentFees = () => {
  const dispatch = useDispatch()
  const studentdetails = useSelector((state) => state.studentSearch)
  const { loading, student, error } = studentdetails
  const [name, setName] = useState('')
  const [classname, setClassname] = useState('')
  const [ok, setOk] = useState(false)
  const [rollno, setRollno] = useState('')

  const [monthname, setMonthname] = useState('')
  const now = new Date();
  const [monthlyfees, setMonthlyfees] = useState('')
  const [miscellaneous, setMiscellaneous] = useState('')
  const studentFees = useSelector((state) => state.studentFees)
  // const studentFees = useSelector((state) => state.studentFees)

  const {
    loading: loadingfees,
    error: errorfees,
    success: successfees,
  } = studentFees
  const formSubmit = async (e) => {
    e.preventDefault()
    dispatch(studentSearch(name.trim(), classname, rollno))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setOk(true)

    dispatch(
      PayFees(
        student._id,
        student.student_name,

        student.classname,
        student.roll_no,
        monthname,
        dateFormat(now, "yyyy"),
        monthlyfees,
        miscellaneous
      )
    )
    setTimeout(() => {
      setOk(false)
    }, 10000)
    // setName('')
    // setClassname('')
    // setRollno('')
    // setMonthlyfees('')

    dispatch({
      type: STUDENT_SEARCH_CLEAR,
    })
  }
  useEffect(() => {
    dispatch({
      type: STUDENT_FEES_RESET,
      type: STUDENT_SEARCH_CLEAR,
    })
  }, [dispatch])
  return (
    <div className='container1'>
      <div className='search-form'>
        <h4>Search for Student to pay fees</h4>

        <form onSubmit={formSubmit}>
          <input
            className='first-input'
            type='text'
            value={name}
            placeholder='Enter the name of student'
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            id='class'
            value={classname}
            onChange={(e) => setClassname(e.target.value)}
            required
          >
            <option value=''>Select Class</option>
            <option value='Math'>Math</option>
            <option value='Literature'>Literature</option>
            <option value='Chemistry'>Chemistry</option>
            <option value='English'>English</option>
            <option value='Physics'>Physics</option>
            <option value='Japanese'>Japanese</option>
            <option value='History'>History</option>
            <option value='Geography'>Geography</option>
            <option value='Information Technology'>Information Technology</option>
            <option value='Biology'>Biology</option>
            <option value='Social Skills'>Social Skills</option>
            <option value='Chinese'>Chinese</option>
            <option value='Anime'>Anime</option>
          </select>
          <input
            type='number'
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
            placeholder='Enter the roll no'
            required
          />
          <button className='btn-search' type='submit'>
            Search
          </button>
        </form>
      </div>
      {ok && errorfees && <Message variant='danger' message={errorfees} />}
      {ok && successfees && (
        <Message variant='success' message={successfees.message} />
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' message={error} />
      ) : loadingfees ? (
        <Loader />
      ) : (
        student && (
          <div className='outer-layout'>
            <h1>Student Fees Section</h1>

            <form onSubmit={submitHandler}>
              <div className='form-inner'>
                <div className='form-control'>
                  <label for='name'>Student Name</label>
                  <input type='text' value={student.student_name} />
                </div>
                {/* <div className='form-control'>
            <label for='name'>Full Name</label>
            <input type='text' />
          </div>{' '} */}
                <div className='form-control'>
                  <label for='name'>Class</label>
                  <select id='class' value={student.classname}>
                    <option value=''>Select</option>
                    <option value='Math'>Math</option>
                    <option value='Literature'>Literature</option>
                    <option value='Chemistry'>Chemistry</option>
                    <option value='English'>English</option>
                    <option value='Physics'>Physics</option>
                    <option value='Japanese'>Japanese</option>
                    <option value='History'>History</option>
                    <option value='Geography'>Geography</option>
                    <option value='Information Technology'>Information Technology</option>
                    <option value='Biology'>Biology</option>
                    <option value='Social Skills'>Social Skills</option>
                    <option value='Chinese'>Chinese</option>
                    <option value='Anime'>Anime</option>
                  </select>
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Roll No</label>
                  <input type='number' value={student.roll_no} />
                </div>{' '}
                <div className='form-control'>
                  <label for='year'>Year</label>
                  <input
                    type='string'
                    value={dateFormat(now, "yyyy")}
                  />
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Month</label>
                  <select
                    id='class'
                    value={monthname}
                    onChange={(e) => setMonthname(e.target.value)}
                    required
                  >
                    <option value=''>Select Month</option>

                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                    {/* <option value='Ten'>Ten</option> */}
                  </select>
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Monthly Fees</label>
                  <input
                    type='number'
                    value={monthlyfees}
                    onChange={(e) => setMonthlyfees(e.target.value)}
                    required
                  />
                </div>{' '}
                <div className='form-control'>
                  <label for='name'>Miscellaneous</label>
                  <input
                    type='number'
                    value={miscellaneous}
                    onChange={(e) => setMiscellaneous(e.target.value)}
                  />
                </div>
                {/* <div className="register-btn"> */}
                {/* </div> */}
              </div>

              <button className='btn-register' type='submit'>
                Pay Now
              </button>
            </form>
          </div>
        )
      )}
    </div>
  )
}

export default StudentFees
