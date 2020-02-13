<template>
    <div>
        <mdb-btn rounded color="info" @click="show = true">Download Report<mdb-icon icon="fas fa-file-csv" class="ml-2"/></mdb-btn>
        <mdb-modal :show="show" @close="show = false" info>
            <mdb-modal-header>
                <mdb-modal-title>File Ready to Download</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body  class="text-center">
                <mdb-icon icon="fas fa-file-csv" size="7x" class="mb-3 animated rotateIn"/>
                    <mdb-input label="Report Name" ref="reportFileName" />
            </mdb-modal-body>
            <mdb-modal-footer center>
                <mdb-btn color="info" @click="download">Download CSV File</mdb-btn>
                <mdb-btn outline="info" @click="show = false">Cancel</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
    </div>
</template>

<script>
    import {   mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbInput  } from 'mdbvue';
    import { GET_EMOTIONS_CSV_REPORT } from './queries';

    /**
     * @function _checkType - used to check the file name and assert that it's CSV Type
     * @param fileName - the name of the report to be downloaded
     * @return {string} - the fileName after cleaning it and inserting .csv in the last of the name
     * @private
     */
    const _checkType = fileName => {
        for (let i = fileName.length; i >= 0; i--) {
            if (fileName[i] === '.') {
                fileName = fileName.slice(0, i);
            }
        }
        return fileName + ".csv";
    };

    export default {
        name:'ModalEventsPage',
        components: {
            mdbIcon,
            mdbBtn,
            mdbModal,
            mdbModalHeader,
            mdbModalTitle,
            mdbModalBody,
            mdbModalFooter,
            mdbInput
        },
        data() {
            return {
                show: false,
            };
        },
        methods: {
            /**
             * @async
             * @function download - used to fetch all the emotions from the Server and download it as a CSV Report File
             */
           async download() {
               try{
                   if(!this.$refs.reportFileName.innerValue){
                   return alert("Please Provide a Report Name");
               }
               let reportTitle = await _checkType(this.$refs.reportFileName.innerValue);
               let str = await this.$apollo.query({
                    query: GET_EMOTIONS_CSV_REPORT
                });
               str = str.data.getEmotionsCsvReport;
                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(str));
                element.setAttribute('download', reportTitle);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
               }catch (e) {
                   alert("Error With Fetching the Data from the server");
                   console.warn(e)
               }
            }
        }
    }
</script>
<style>
</style>