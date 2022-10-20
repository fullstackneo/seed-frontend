import data from '../../db/data.js';
import generateInvoiceNum from '../../utils/generateInvoiceNum.js';

const listItem = data => /* html */ `<li class="flex flex-wrap justify-between px-2 py-4">
  <span>ID: 089f7c24-4cb4-4e5c-8993-6acdbaecfd69</span>
  <span>Status:${data.dueDate > data.paidAt ? 'paid' : 'late'}</span>
  <span class="showDetail fa cursor-pointer"></span>
  <ul class="mt-2 hidden w-full shrink-0">
    <li>Due Date:${moment(data.dueDate).format('MMMM Do YYYY, h:mm:ss a')}</li>
    <li>Paid Date:${moment(data.paidDate).format('MMMM Do YYYY, h:mm:ss a')}</li>
    <li>Items:${data.items.materials}</li>
    <li>Expense:${data.items.expenses}</li>
    <li>Hours:${data.items.hours}</li>
  </ul>
</li>`;

const html = /* html */ `<div class="w-[500px]">
  <div class="createInvoice  flex  flex-col items-center justify-center">
    <h1 class="px-2 py-2 font-bold">Create Invoice</h1>
    <form class="flex w-full flex-col items-stretch justify-center space-y-2">
      <div class="flex items-center justify-start">
        <label class="basis-1/4">Invoice:</label>
        <p class="basis-3/4 border-1 border-gray-500 bg-gray-400 px-2">${generateInvoiceNum()}</p>
      </div>
      <div class="flex items-center justify-start">
        <label class="basis-1/4">Recipient:</label>
        <input class="basis-3/4 border-1 border-gray-500 px-2" placeholder="Email" id="hours" type="email" min="0" value="" />
      </div>
      <div class=" flex items-center justify-start">
        <label class="basis-1/4" for="hours">Hours:</label>
        <input placeholder="1" class="basis-3/4 border-1 border-gray-500 px-2" id="hours" type="number" min="0" value="" />
      </div>

      <div class="flex items-center justify-start">
        <label class="basis-1/4" for="expenses">Expense($):</label>
        <input placeholder="100.00" class="basis-3/4 border-1 border-gray-500 px-2" id="expenses" type="number" min="0" value="" />
      </div>
      <div class="flex items-center justify-start">
        <label class="basis-1/4" for="items">Items:</label>
        <input class="basis-3/4 border-1 border-gray-500 px-2" id="items" type="text" value="" />
      </div>
      <div class="flex justify-start">
        <label class="basis-1/4" for="note">Note:</label>
        <textarea class="basis-3/4 resize-none border-1 border-gray-500 px-2" id="note" rows="" cols=""></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="w-[100px] bg-blue-400 px-2 py-2">Create</button>
      </div>
    </form>
  </div>

  <ul class="invoices mt-5 w-full divide-y-1 divide-gray-400 border-2">
    ${data.map(el => listItem(el)).join('')}
  </ul>
</div>`;

document.querySelector('body').insertAdjacentHTML('afterbegin', html);

// toggle more details of an invoice
document.querySelector('.invoices').addEventListener('click', e => {
  if (e.target.matches('.showDetail')) {
    e.target.nextElementSibling.classList.toggle('hidden');
    e.target.innerHTML = e.target.innerHTML === '' ? '' : '';
  }
});
