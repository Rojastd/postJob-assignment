import {Component} from 'react'

import {BsArrowClockwise} from 'react-icons/bs'

import './index.css'

const ExperienceList = [
  {id: 0, exp: 0},
  {id: 1, exp: 1},
  {id: 2, exp: 2},
  {id: 3, exp: 3},
  {id: 4, exp: 4},
  {id: 5, exp: 5},
  {id: 6, exp: 6},
  {id: 7, exp: 7},
  {id: 8, exp: 8},
]

const BatchList = [
  {id: 0, batch: 2013},
  {id: 1, batch: 2014},
  {id: 2, batch: 2015},
  {id: 3, batch: 2016},
  {id: 4, batch: 2017},
  {id: 5, batch: 2018},
  {id: 6, batch: 2019},
  {id: 7, batch: 2020},
  {id: 8, batch: 2021},
  {id: 9, batch: 2022},
]

class PostJob extends Component {
  state = {
    jobTitle: '',
    locations: '',
    skills: '',
    minExperience: '',
    maxExperience: '',
    jobDescription: '',
    category: '',
    functionalArea: '',
    minBatch: '',
    maxBatch: '',
    tags: '',
    validation: '',
    fieldError: '',
    isValid: false,
  }

  onChangeJobTitle = event => {
    this.setState({jobTitle: event.target.value})
  }

  onChangeLocations = event => {
    this.setState({locations: event.target.value})
  }

  onChangeSkills = event => {
    this.setState({skills: event.target.value})
  }

  onChangeMinExperience = event => {
    this.setState({minExperience: event.target.value})
  }

  onChangeMaxExperience = event => {
    this.setState({maxExperience: event.target.value})
  }

  onChangeJobDescription = event => {
    this.setState({jobDescription: event.target.value})
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value})
  }

  onChangeFunctionalArea = event => {
    this.setState({functionalArea: event.target.value})
  }

  onChangeTags = event => {
    this.setState({tags: event.target.value})
  }

  onChangeMinBatch = event => {
    this.setState({minBatch: event.target.value})
  }

  onChangeMaxBatch = event => {
    this.setState({maxBatch: event.target.value})
  }

  addAnotherJob = () => {
    this.setState({
      validation: '',
      jobTitle: '',
      locations: '',
      skills: '',
      minExperience: '',
      maxExperience: '',
      jobDescription: '',
      category: '',
      functionalArea: '',
      minBatch: '',
      maxBatch: '',
      isValid: false,
      tags: '',
    })
  }

  onPostingJob = async event => {
    event.preventDefault()
    const {
      jobTitle,
      locations,
      skills,
      minExperience,
      maxExperience,
      jobDescription,
      category,
      functionalArea,
      minBatch,
      maxBatch,
    } = this.state

    const jobDetails = {
      jobTitle,
      locations,
      skills,
      minExperience,
      maxExperience,
      jobDescription,
      category,
      functionalArea,
      minBatch,
      maxBatch,
    }

    if (
      jobTitle === '' ||
      locations === '' ||
      skills === '' ||
      minExperience === '' ||
      maxExperience === '' ||
      jobDescription === '' ||
      category === '' ||
      functionalArea === '' ||
      minBatch === '' ||
      maxBatch === ''
    ) {
      this.setState({fieldError: 'Required*'})
      this.setState({validation: 'Fill all the required fields'})
    } else {
      this.setState({isValid: true})
      this.setState({validation: 'Job Posted Successfully'})

      const options = {
        method: 'POST',
        body: JSON.stringify(jobDetails),
      }
    }
  }

  renderJobTitleField = () => {
    const {jobTitle, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="jobTitle">
          Job Title*
        </label>
        <br />
        <input
          type="input"
          id="jobTitle"
          className="input-field"
          value={jobTitle}
          onChange={this.onChangeJobTitle}
          placeholder="Write a Title that appropriately describes the Job"
        />

        {jobTitle === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  renderLocationsField = () => {
    const {locations, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="location">
          Locations*
        </label>
        <br />
        <input
          type="input"
          id="location"
          className="input-field"
          value={locations}
          onChange={this.onChangeLocations}
          placeholder="+Add Location"
        />
        {locations === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  renderSkillsField = () => {
    const {skills, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="skills">
          Skills*
        </label>
        <br />
        <input
          type="input"
          id="skills"
          className="input-field"
          value={skills}
          onChange={this.onChangeSkills}
          placeholder="Skills"
        />
        {skills === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  onClickRetry = () => {
    this.setState({jobDescription: ''})
  }

  renderJobDescriptionField = () => {
    const {jobDescription, fieldError} = this.state
    console.log(jobDescription)

    return (
      <>
        <label className="input-label" htmlFor="jobDescription">
          Job Description*
        </label>
        <br />
        <div className="textarea-icon">
          <textarea
            id="jobDescription"
            className="jd-input-field"
            value={jobDescription}
            onChange={this.onChangeJobDescription}
            placeholder="Describe the role and responsibilities, skills required for the jon and help the candidates understand the role better"
          />
          <div className="icon-container">
            <button
              type="button"
              className="retry-button"
              onClick={this.onClickRetry}
            >
              <BsArrowClockwise className="icon" />
            </button>
          </div>
        </div>
        {jobDescription === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  renderCategoryField = () => {
    const {category, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="category">
          Category*
        </label>
        <br />
        <input
          type="input"
          id="category"
          className="input"
          value={category}
          onChange={this.onChangeCategory}
          placeholder="category"
        />
        {category === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  renderFunctionalAreaField = () => {
    const {functionalArea, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="functionalArea">
          FunctionalArea*
        </label>
        <br />
        <input
          type="input"
          id="functionalArea"
          className="input"
          value={functionalArea}
          onChange={this.onChangeFunctionalArea}
          placeholder="FunctionalArea"
        />
        {functionalArea === '' ? <p className="red">{fieldError}</p> : ''}
      </>
    )
  }

  renderTagsField = () => {
    const {tags} = this.state

    return (
      <>
        <label className="input-label" htmlFor="tags">
          Tags
        </label>
        <br />
        <input
          type="input"
          id="tags"
          className="input-field"
          value={tags}
          onChange={this.onChangeTags}
          placeholder="+Add Tags"
        />
      </>
    )
  }

  renderExperienceField = () => {
    const {minExperience, maxExperience, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="experience">
          Experience*
        </label>
        <br />
        <div className="max-min-fields">
          <select
            className="dropdown"
            id="experience"
            value={minExperience}
            onChange={this.onChangeMinExperience}
          >
            <option value="" disabled>
              Select Min
            </option>
            {ExperienceList.map(each => (
              <option key={each.id} value={each.exp}>
                {each.exp}
              </option>
            ))}
          </select>
          {minExperience === '' ? <p className="red">{fieldError}</p> : ''}
          <select
            className="dropdown"
            id="experience"
            value={maxExperience}
            onChange={this.onChangeMaxExperience}
          >
            <option value="" disabled>
              Select Max
            </option>
            {ExperienceList.map(each => (
              <option key={each.id} value={each.exp}>
                {each.exp}
              </option>
            ))}
          </select>
          {maxExperience === '' ? <p className="red">{fieldError}</p> : ''}
        </div>
      </>
    )
  }

  renderBatchField = () => {
    const {minBatch, maxBatch, fieldError} = this.state

    return (
      <>
        <label className="input-label" htmlFor="Batch">
          Batch*
        </label>
        <br />
        <div className="max-min-fields">
          <select
            className="dropdown"
            id="Batch"
            value={minBatch}
            onChange={this.onChangeMinBatch}
          >
            <option value="" disabled>
              Min Batch
            </option>
            {BatchList.map(each => (
              <option key={each.id} value={each.batch}>
                {each.batch}
              </option>
            ))}
          </select>
          {minBatch === '' && <p className="red">{fieldError}</p>}
          <select
            className="dropdown"
            id="Batch"
            value={maxBatch}
            onChange={this.onChangeMaxBatch}
          >
            <option value="" disabled>
              Max Batch
            </option>
            {BatchList.map(each => (
              <option key={each.id} value={each.batch}>
                {each.batch}
              </option>
            ))}
          </select>

          {maxBatch === '' && <p className="red">{fieldError}</p>}
        </div>
      </>
    )
  }

  abc = () => {
    const {isValid, validation} = this.state
    return (
      <>{isValid ? <p>{validation}</p> : <div>{this.onPostingJob()}</div>}</>
    )
  }

  render() {
    const {validation, isValid} = this.state
    console.log(isValid)
    const modelClassName = isValid ? 'green' : 'red'
    return (
      <>
        <form className="post-job-container" onSubmit={this.onPostingJob}>
          <h1>Basic Details</h1>

          <hr className="line" />
          <div className="input-container">{this.renderJobTitleField()}</div>
          <div className="input-container">{this.renderLocationsField()}</div>
          <div className="input-container">{this.renderSkillsField()}</div>
          <div className="input-container">{this.renderExperienceField()}</div>
          <div className="input-container">
            {this.renderJobDescriptionField()}
          </div>
          <h1>Targeting</h1>
          <hr className="line" />
          <div className="category-functional-container">
            <div className="input-container">{this.renderCategoryField()}</div>
            <div className="input-container">
              {this.renderFunctionalAreaField()}
            </div>
          </div>
          <div className="input-container">{this.renderBatchField()}</div>
          <div className="input-container">{this.renderTagsField()}</div>
          {isValid && <p className={modelClassName}>{validation}</p>}
          {!isValid && <p className={modelClassName}>{validation}</p>}
          <div className="button-container">
            <button type="submit" className="button">
              Post Job
            </button>
            <button
              type="button"
              className="add-another-job"
              onClick={this.addAnotherJob}
            >
              Add Another Job
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default PostJob
