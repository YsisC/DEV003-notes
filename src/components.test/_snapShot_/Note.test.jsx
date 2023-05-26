// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Pruebas en <Note />  debe hacer match con el snapshot 1`] = `
<div className={styles.note}>
<div className={styles.note_main}>
  <h1> Compras </h1>
  <p> Compras </p>
  {/* <p>{id}</p> */}
</div>
<div className={styles.note_footer}>
  <button>
    <MdModeEditOutline size={30} onClick={() => {
      router.push({
        pathname: 'notes/[content]',
        query: { content: id }
      });
    }}
    />
  </button>

  {/* <small>20/20/17 </small> */}
  <button>
    <MdDelete size={30}
      onClick={deleteNoteId}
    />

  </button>

</div>


</div>
`;
