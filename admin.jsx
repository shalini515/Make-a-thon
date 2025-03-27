<div class="container mx-auto py-10">
  <h1 class="text-3xl font-bold text-center mb-6">Admin Dashboard: IPR Verification</h1>

  <!-- Table of Ideas -->
  <div class="overflow-x-auto">
    <table class="min-w-full table-auto">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2 text-left">#</th>
          <th class="px-4 py-2 text-left">Title</th>
          <th class="px-4 py-2 text-left">Category</th>
          <th class="px-4 py-2 text-left">Funding</th>
          <th class="px-4 py-2 text-left">Impact</th>
          <th class="px-4 py-2 text-left">IPR Status</th>
          <th class="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Idea 1 -->
        <tr>
          <td class="px-4 py-2">1</td>
          <td class="px-4 py-2">Smart Traffic System</td>
          <td class="px-4 py-2">Technology</td>
          <td class="px-4 py-2">$5000</td>
          <td class="px-4 py-2">Improves traffic flow in 50+ cities</td>
          <td class="px-4 py-2">
            <span class="text-yellow-500">Pending</span>
          </td>
          <td class="px-4 py-2">
            <button class="bg-blue-500 text-white px-3 py-1 rounded-lg">Verify</button>
            <button class="bg-red-500 text-white px-3 py-1 rounded-lg ml-2">Reject</button>
          </td>
        </tr>
        <!-- Idea 2 -->
        <tr>
          <td class="px-4 py-2">2</td>
          <td class="px-4 py-2">AI Medical Diagnosis</td>
          <td class="px-4 py-2">Healthcare</td>
          <td class="px-4 py-2">$8000</td>
          <td class="px-4 py-2">Helping over 10,000 patients get early diagnosis</td>
          <td class="px-4 py-2">
            <span class="text-green-500">Approved</span>
          </td>
          <td class="px-4 py-2">
            <button class="bg-blue-500 text-white px-3 py-1 rounded-lg">View Details</button>
          </td>
        </tr>
        <!-- More ideas... -->
      </tbody>
    </table>
  </div>

  <!-- IPR Document Upload Section -->
  <div class="mt-8 bg-gray-100 p-6 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">Upload IPR Documents</h2>
    <form action="/submit-ipr" method="POST" enctype="multipart/form-data">
      <div class="mb-4">
        <label for="ipr-document" class="block text-sm font-medium text-gray-700">Upload Patent/Copyright Document</label>
        <input type="file" id="ipr-document" name="ipr_document" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md" />
      </div>
      <div class="mb-4">
        <label for="ipr-comments" class="block text-sm font-medium text-gray-700">Admin Comments</label>
        <textarea id="ipr-comments" name="ipr_comments" rows="4" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
    </form>
  </div>
</div>
