import React from 'react';

const FormGroup = ({ name, debug, label, dirty, error, pristine, children }) =>
  <div style={styles.group}>
    {label &&
      <label htmlFor={name} style={styles.label}>{label}</label>}

    {children}

    {dirty && error &&
      <div style={styles.error}>
        {error.map(err => <div key={err.code}>{err.message}</div>)}
      </div>}

    {debug &&
      <div style={styles.debug}>
        <div>dirty: {dirty.toString()}</div>
        <div>pristine: {pristine.toString()}</div>
        <div>error: {JSON.stringify(error)}</div>
      </div>}
  </div>;

const styles = {
  group: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  debug: {
    marginTop: 5,
  },
  error: {
    marginTop: 5,
    color: '#d9534f',
  },
};

export default FormGroup;
