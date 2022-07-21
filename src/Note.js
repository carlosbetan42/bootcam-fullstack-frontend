export const Note = (props) => {
  const { id, title, body, content } = props;

  return (
    <li>
      <p>{id}.- {content}</p>
      <small>
        <time>{content}</time>
      </small>
    </li>
  );
};