import { useState } from "react";
import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Layout } from "../../components/Layout";

const Wrap = styled.div``;

const Title = styled.h3`
  margin-top: 200px;
`;

const Form = styled.form``;

const Input = styled.input``;

const ConWrap = styled.div`
  display: grid;
  /* =>grid가 적용 될 부문에게 사용, 플렉스와 동일 */
  grid-template-columns: repeat(5, 1fr);
  /* =>그리드 레이아웃을 규칙에 맞게 반복시킴
  =>repeat(가로 갯수, 크기값)
  =>1fr 컨텐츠끼리 1배울씩 똑같은 값으로 크기를 나눠가짐 */
  column-gap: 30px;
  /* =>가로 컨텐츠 간격 */
  row-gap: 20px;
  /* =>세로 컨텐츠 간격 */
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.h4``;

export const Search = () => {
  // api에 검색 요청에 맞게 url연결과 매개변수 작성
  // form 사용시 useForm 사용

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const [term, setTerm] = useState();

  const SearchHandler = async (data) => {
    // console.log(data);
    const { search: keyword } = data;
    // console.log("검색결과: " + search);
    try {
      const { results } = await movieSearch(keyword);
      // console.log(results);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);

  // const [searchData, setSearchData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const a = await movieSearch();
  //       setSearchData(a);
  //     } catch (error) {}
  //   })();
  // }, []);

  return (
    <Wrap>
      <Title>찾으시는 영화가 있으신가요?</Title>

      <Form onSubmit={handleSubmit(SearchHandler)}>
        <Input
          {...register("search", { required: "검색 내용을 입력해주세요" })}
          type="text"
          placeholder="영화 검색"
        />
      </Form>

      <Layout>
        {term && (
          <ConWrap>
            {term.map((data) => (
              <Con key={data.id}>
                <Bg $bgUrl={data.backdrop_path} />
                <MovieTitle>{data.title}</MovieTitle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </Wrap>
  );
};
