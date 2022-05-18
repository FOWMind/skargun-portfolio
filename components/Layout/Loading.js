import styled from 'styled-components'
import ReactLoading from 'react-loading'

export default function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type="bars" style={styles.ReactLoading} />
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  width: 100%;
`

const styles = {
  ReactLoading: {
    margin: '2rem auto',
    width: '80px',
    fill: '#fff',
  },
}
