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
  fill: ${({ theme }) => theme.mainClr};
`

const styles = {
  ReactLoading: {
    margin: '2rem auto',
    width: '80px',
  },
}
