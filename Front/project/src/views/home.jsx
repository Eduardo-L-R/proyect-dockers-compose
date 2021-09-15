import React, { useState, useEffect } from 'react';
import { Conections } from '../services/conections';

export const Home = () => {
  const [htmlDisplayColumns, setHtmlDisplayColumns] = useState(null);
  const [htmlSearch, setHtmlSearch] = useState(null);
  const [htmlTable, setHtmlTable] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [form, setForm] = useState({name: '', age: '', happy: '', healthy: '', busy: ''});
  const [columns, setColums] = useState({name: true, age: true, happy: true, healthy: true, busy: true});
  const titleDisplayColumns = 'Displays Columns';
  const titleSearchs = 'Search Fields';
  const titleTable = 'Table';
  const _conections = new Conections();

  useEffect(() => {  
    const fetch = _conections.getData('getAll');
    fetch.then((data) => {
      console.log(data, form);
      if(data.length === 0 && form.name === '' && form.age === '' && form.happy === '' && form.healthy === '' && form.busy === ''){
        _conections.getData('create-base-data');
        setTimeout(() => {
          const fetch = _conections.getData('getAll');
          fetch.then((data) => {
            setDataTable(data);
          });
        }, 2000);
      }else{
        setDataTable(data);
      }
    });
  }, []);
  
  useEffect(()=>{
    makeHtmlDisplayColumns();
    makeHtmlSearch();
    makeHtmlTable();
  },[dataTable])

  useEffect(()=>{
    getData()
  },[form])

  useEffect(()=>{
    getData()
  },[columns])

  const makeHtmlDisplayColumns = async () => {
    setHtmlDisplayColumns (
      <div className="card">
        <div className="card-body">
          <p className="text-primary font-weight-bolder h5">{titleDisplayColumns.toUpperCase()}</p>
          <form className="d-flex flex-row flex-wrap">
            <div className="col-md-4 col-12 mt-sm-3">
              <button className={`btn mr-sm-2 w-100 ${columns.name?'btn-info':'btn-outline-warning'}`} name="name" onClick={(event)=>{event.preventDefault(); setColumnDisplay(event)}}>Display name</button>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className={`btn mr-sm-2 w-100 ${columns.age?'btn-info':'btn-outline-warning'}`} name="age" onClick={(event)=>{event.preventDefault(); setColumnDisplay(event)}}>Display age</button>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className={`btn mr-sm-2 w-100 ${columns.happy?'btn-info':'btn-outline-warning'}`} name="happy" onClick={(event)=>{event.preventDefault(); setColumnDisplay(event)}}>Display happy</button>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className={`btn mr-sm-2 w-100 ${columns.healthy?'btn-info':'btn-outline-warning'}`} name="healthy" onClick={(event)=>{event.preventDefault(); setColumnDisplay(event)}}>Display healthy</button>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className={`btn mr-sm-2 w-100 ${columns.busy?'btn-info':'btn-outline-warning'}`} name="busy" onClick={(event)=>{event.preventDefault(); setColumnDisplay(event)}}>Display busy</button>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className="btn btn-warning text-white font-weight-bold mr-sm-2 w-100" onClick={(event)=>{event.preventDefault(); displayAllColumns()}}>Display All Columns</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const makeHtmlSearch = async () => {
    setHtmlSearch (
      <div className="card">
        <div className="card-body">
          <p className="text-primary font-weight-bolder h5">{titleSearchs.toUpperCase()}</p>
          <form className="d-flex flex-row flex-wrap">
            <div className="col-md-4 col-12 mt-sm-3">
              <input name="name" type="text" className="form-control" placeholder="name" id="name" value={form.name} onChange={(event)=>{event.preventDefault(); getDataFilter(event)}}/>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <input name="age" type="number" className="form-control" placeholder="age" id="age" value={form.age} onChange={(event)=>{event.preventDefault(); getDataFilter(event)}}/>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <select name="happy" className="custom-select mr-sm-2 bg-white" id="happy" value={form.happy} onChange={(event)=>{event.preventDefault(); getDataFilter(event)}}>
                <option value="">Happy</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <select name="healthy" className="custom-select mr-sm-2 bg-white" id="healthy" value={form.healthy} onChange={(event)=>{event.preventDefault(); getDataFilter(event)}}>
                <option value="">Healthy</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <select name="busy" className="custom-select mr-sm-2 bg-white" id="busy" value={form.busy} onChange={(event)=>{event.preventDefault(); getDataFilter(event)}}>
                <option value="">Busy</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="col-md-4 col-12 mt-sm-3">
              <button className="btn btn-warning text-white font-weight-bold mr-sm-2 w-100" onClick={(event)=>{event.preventDefault(); clearForm()}}>Clear Form</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const makeHtmlTable = async () => {
    const mapData = dataTable.map((register, index) => (
      <tr className="text-center" key={index}>
        {columns.name?
        <td>{register.name}</td>
        :<></>}
        {columns.age?
        <td>{register.age}</td>
        :<></>}
        {columns.happy?
        <td>{String(register.happy)}</td>
        :<></>}
        {columns.healthy?
        <td>{String(register.healthy)}</td>
        :<></>}
        {columns.busy?
        <td>{String(register.busy)}</td>
        :<></>}
      </tr>
    ));

    setHtmlTable (
      <div className="card">
        <div className="card-body">
          <p className="text-primary font-weight-bolder h5 ">{titleTable.toUpperCase()}</p>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr className="text-center bg-info text-white">
                  {columns.name?
                  <th>name</th>
                  :<></>}
                  {columns.age?
                  <th>age</th>
                  :<></>}
                  {columns.happy?
                  <th>happy</th>
                  :<></>}
                  {columns.healthy?
                  <th>healthy</th>
                  :<></>}
                  {columns.busy?
                  <th>busy</th>
                  :<></>}
                </tr>
              </thead>
              <tbody className=" ">
                {mapData}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const setColumnDisplay = (event) => {
    let object = columns;
    columns[event.target.name] = !columns[event.target.name];
    setColums(object);
    getData();
  }

  const getDataFilter = (event) => {
    let object = form;
    form[event.target.name] = event.target.value;
    setForm(object);
    getData();
  }

  const getData = () =>{
    const fetch = _conections.getData(`filter?name=${form.name}&age=${form.age}&happy=${form.happy}&healthy=${form.healthy}&busy=${form.busy}`);
    fetch.then((data) => {
      setDataTable(data);
    });
  }

  const clearForm = () => {
    setForm({name: '', age: '', happy: '', healthy: '', busy: ''});
  }

  const displayAllColumns = () => {
    setColums({name: true, age: true, happy: true, healthy: true, busy: true})
  }

  return (
    <div className="w-100">
      {htmlDisplayColumns}
      <p className='alert alert-warning py-2 font-weight-bold'>Click buttons for display colums</p>
      {htmlSearch}
      <p className='alert alert-warning py-2 font-weight-bold'>Use filters for get the info</p>
      {htmlTable}
    </div>
  );
};

export default Home;
