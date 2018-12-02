window.onload = () => {
    appinit();
}

let app = {
    init: function () {
        this.addevent();
        this.loadcontent();
    },
    appevent: {
        function() {
            form.addevent('submit', (event) => {
                this.submitpost(event, this.addRow);
            });


        }
    },
    addRow: function (data) {
        let tbody = getElementsByClassName(tbody.posts)[0];
        let tr = document.createElement("tr");
        tr.innerHTML = (`<tr>` +
            `<td>${data.id}</td>` +
            `<td>${data.nombre}</td>` +
            `<td>${data.creador}</td>` +
            `<td class='update'><a href="" ></a>Update</td>` +
            `<td class='delete'><a href=""></a>Delete</td>` +
            `</tr>`
        );
        tr.getElementsByClassName('update')[0].addEventListener('click',(event)=>{
            this.updatepost(tr,tbody,data);
        });
        tr.getElementsByClassName('delete')[0].addEventListener('click',(event)=>{
            this.deletepost(event,data,tr,tbody);
        });
    },
    updatepost:function(tr,tbody,data){
        tr.innerHTML = `<td colspan=2>
                  <input type="text" placeholder="Nombre ">
                  <input type="text" placeholder="Creador ">
                  <input type="submit" id="input" class="submit" value="Guardar">
                  <input type="submit" id="input" class="submit" value="Cancelar">`;
        let form = tr.getElementsByClassName('form')[0];
        let deletepost = this.deletepost;
        let updatepost = this.updatepost;
                }
};