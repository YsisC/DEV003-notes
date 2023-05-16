import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import dashify from 'dashify';
import axios from 'axios';


export default function EditEntry() {
    const router = useRouter()
  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  })

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
    //   const res = await axios.get(`/api/entry/${id}`);
      const { title, content } = res.data;
      setContent({
        title,
        body
      })
    }
  }, [router])
  return (
    <div>[id]</div>
  )


}
