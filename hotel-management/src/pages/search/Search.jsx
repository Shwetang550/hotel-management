import React from 'react'

const Search = ({title, place}) => {
  return (
      <div
          style={{
              height: '80vh',
              width: '100vw',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
          }}
      >
          <h1 style={{ color: '#404040', marginBottom: '50px' }}>{title}</h1>
          
          <input
              placeholder={place}
              style={{
                  width: '50vw',
                  border: '1px solid #aaa',
                  borderRadius: '999px',
                  padding: '8px 15px',
                  fontSize: 20
              }}
          />
          <button
              style={{
                  backgroundColor: '#00ace0',
                  padding: '8px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  marginTop: '10px',
                  fontSize: 24,
                  color: '#fff'
              }}
          >Search</button>
    </div>
  )
}

export default Search