var imageLinks;


imageLinks = ['https://imgs.search.brave.com/Sa1sgZstVurm2Z530HQ5X9ohU4pICrLa0z7k_7afNoA/rs:fit:452:225:1/g:ce/aHR0cHM6Ly93d3cu/Y29uZXhwb2NvbmFn/Zy5jb20vZ2V0bWVk/aWEvYTU3ODBkZDUt/ZGVkMC00Mjg4LWEy/ODQtNWEyOTQwYWQ5/ZmVhL2NlY2FfOV8y/Ml8xN180NTJ4MjI1/XzAwMDBfVGhlX05l/eHQtR2VuX1Rvb2xz/X1Bvd2VyaW5nX01v/ZGVybl9JbmR1c3Ry/aWFsaXplZF9Db25z/dHJ1Y3Rpb24tMTU0/NDE1OS5hc3B4', 'https://imgs.search.brave.com/pV-a-inHj6PSh6t6mW2HeVYhiinV7QSuc3uj-KVs8Sw/rs:fit:320:215:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIzL2Ux/L2VlLzIzZTFlZWQx/Zjg3OTZjMTlkZjlm/MTY0YmNhYzhhZDQ0/LmpwZw', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoIxAP6DKh9tPbcaWLn_WK_B-bFPPEsKZgw&usqp=CAU', 'https://www.fix.com/assets/content/24437/diy-tool-kit-open-graph.png', 'https://imgs.search.brave.com/9hAp96pUM1lhWTpjT_5w1ntl0fwFJ-2sFpDgLGhvZ5I/rs:fit:727:422:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2NiaS1yZXNlYXJj/aC1wb3J0YWwtdXBs/b2Fkcy8yMDIwLzA5/LzI5MTUxMjU5L1dl/YWx0aFRlY2hNTUNy/b3AuanBn'];


document.getElementById('next').addEventListener('click', (event) => {
  imageLinks.push(imageLinks.shift());
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", imageLinks[0]);

});

document.getElementById('prev').addEventListener('click', (event) => {
  imageLinks.unshift(imageLinks.pop());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", imageLinks[0]);

}); 