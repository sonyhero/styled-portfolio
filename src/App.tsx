import styled, { css } from 'styled-components'

export const App = () => {
  return (
    <Box>
      <CardBox>
        <ImgBox />
        <ContentBox>
          <Title>Headline</Title>
          <Discribe>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Discribe>
          <div>
            <StyledBtn btnType={'primary'}>See more</StyledBtn>
            <StyledBtn btnType={'secondary'}>Save</StyledBtn>
          </div>
        </ContentBox>
      </CardBox>
    </Box>
  )
}

type StyledBtnProps = {
  btnType?: 'primary' | 'secondary'
}

const StyledBtn = styled.button<StyledBtnProps>`
  border: none;
  width: 5.375rem;
  height: 1.875rem;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.25rem;
  border-radius: 0.3125rem;
  margin-right: 1rem;

  ${(props) =>
    props.btnType === 'primary' &&
    css<StyledBtnProps>`
      background: #4e71fe;
      color: #fff;
    `}

  ${(props) =>
    props.btnType === 'secondary' &&
    css<StyledBtnProps>`
      color: #4e71fe;
      border: 2px solid #4e71fe;
    `}
`
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardBox = styled.div`
  width: 18.75rem;
  height: 21.875rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`
const ImgBox = styled.div`
  margin: 0.63rem 0.63rem 0 0.63rem;
  width: 17.5rem;
  height: 10.625rem;
  border-radius: 0.625rem;
  background-image: url('https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1693180800&Signature=Rl3vMoNm1ZXfpr6eEczVC6vGtVaHyveskqgJkxgajK1PFUrN9JKme0RtEcHjXnTCIcat35LTpLSyEYZCo3uMzzL6pyLGV7PRK3qGKI8dlxMKUWxtugFJEgIU23rzWp3luiMTgKY-kpCeyq-GKa40ojYGsTTAi9IZyR8SYUDdS1tOgg0zbq9Q12RjQx0r0Q9RAxi2bBewNFo~yU00y7P7HG1X7CawZOWInoTSEbux898IXvgIrV1Gg91097OuvswHvnwVxFbZDXALUAqHct~CECr-gDVGTQrZ5L6d77ooh8BqsM7iZlyA7cGbK4FNNLcWNU8HsejvFlMdeF4ZgBWVZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
  background-color: lightgray;
  background-size: cover; /* or 'contain' */
  background-repeat: no-repeat;
  background-position: center center;
`
const Title = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
`

const Discribe = styled.div`
  width: 16.25rem;
  color: #abb3ba;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
`
const ContentBox = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    padding-bottom: 1.25rem;
  }
`
