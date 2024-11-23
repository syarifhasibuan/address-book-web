function renderContact() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const contactToRender = contactsData.filter((contact) => {
    return contact.id === id;
  })[0];

  const elementToRender = `
<div class="p-8 max-w-4xl">
  <h1 id="full-name" class="text-3xl pb-1">${contactToRender.name}</h1>
  <span id="work-info" class="pb-1"
    >${contactToRender.workInfo.jobTitle} | ${contactToRender.workInfo.department} | ${contactToRender.workInfo.company}</span
  >
  <hr class="my-2" />
</div>
  `;

  const contactContainerElement = document.getElementById("contact-content");
  contactContainerElement.innerHTML = elementToRender;
}

renderContact();
