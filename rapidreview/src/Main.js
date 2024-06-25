import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Main.css';

function Main() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("no summary yet");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080', { text });
      console.log('Response:', response.data);
      const summ = response.data.value;
      setSummary(summ);
      console.log(summary);
      setLoading(false);
    } catch (error) {
      console.error('Error sending data:', error);
      setError('An error occurred while summarizing the text. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="Main-container">
          <Form onSubmit={handleSubmit} className='form-container'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Text to summarise</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {error && <div className="error">{error}</div>}
          <div className="summary">{summary}</div>
        </div>
      )}
    </>
  );
}

function Loading() {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Main;
