export default function PopUp(){
    return(
        <div className='fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className = 'w-1/3 bg-[#1b1b1b]'>
                <p>Book a FREE assessment today</p>
                <p>Get a customized plan to solve your business and customer problems using technology</p>
                <div class="relative h-20 bg-red-200">
  <input class=" my-5 h-9 rounded-sm border-2 border-black bg-red-200" type="text" placeholder="Enter name class" />
  <div class="absolute left-3 top-1.5 bg-red-200 px-1 font-semibold">class</div>
</div>
        </div>
            </div>
    );
}